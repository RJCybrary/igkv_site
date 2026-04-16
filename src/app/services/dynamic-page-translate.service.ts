import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { GoogleTranslateApiService } from './google-translate-api.service';

@Injectable({
  providedIn: 'root'
})
export class DynamicPageTranslateService {
  private readonly originalTextByNode = new Map<Text, string>();
  private readonly originalAttributesByElement = new WeakMap<HTMLElement, Map<string, string>>();
  private readonly activeTargets = new Set(['uz', 'ru']);
  private readonly translatableAttributes = ['title', 'placeholder', 'aria-label', 'alt'] as const;
  private readonly blockedTags = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA', 'INPUT', 'OPTION', 'MAT-ICON']);
  private mutationObserver: MutationObserver | null = null;
  private retranslateTimer: ReturnType<typeof setTimeout> | null = null;
  private isApplyingTranslation = false;
  private isTranslationInFlight = false;
  private hasPendingRetranslate = false;
  private translationRunId = 0;
  private activeTargetLanguage: string | null = null;
  private activeSourceLanguage = 'auto';
  private originalDocumentTitle = '';

  constructor(private googleTranslateApi: GoogleTranslateApiService) {}

  translateCurrentPage(targetLanguage: string, googleSourceLanguage = 'auto'): Observable<void> {
    if (!this.activeTargets.has(targetLanguage)) {
      this.restoreOriginalTextNodes();
      return of(void 0);
    }
    this.activeTargetLanguage = targetLanguage;
    this.activeSourceLanguage = googleSourceLanguage;
    this.ensureMutationObserver();
    const runId = ++this.translationRunId;

    if (this.isTranslationInFlight) {
      this.hasPendingRetranslate = true;
      return of(void 0);
    }

    const translatableNodes = this.collectTranslatableTextNodes();
    const translatableAttributes = this.collectTranslatableAttributes();
    const sourceDocumentTitle = this.getSourceDocumentTitle();
    const sourceTexts = [
      ...translatableNodes.map((node) => this.getSourceText(node)),
      ...translatableAttributes.map((entry) => entry.sourceValue),
      sourceDocumentTitle
    ].filter((item) => !!item);

    if (!sourceTexts.length) {
      return of(void 0);
    }

    this.isTranslationInFlight = true;

    return this.googleTranslateApi
      .translateBatch(sourceTexts, targetLanguage, googleSourceLanguage)
      .pipe(
        tap((translatedMap) => {
          if (!this.shouldApplyRun(runId, targetLanguage, googleSourceLanguage)) {
            return;
          }
          this.isApplyingTranslation = true;
          translatableNodes.forEach((node) => {
            const sourceText = this.getSourceText(node);
            const translated = translatedMap.get(sourceText);
            if (translated) {
              node.textContent = this.applySpacingTemplate(sourceText, translated);
            }
          });

          translatableAttributes.forEach((entry) => {
            const translated = translatedMap.get(entry.sourceValue);
            if (translated) {
              entry.element.setAttribute(entry.attributeName, translated);
            }
          });

          const translatedTitle = translatedMap.get(sourceDocumentTitle);
          if (translatedTitle) {
            document.title = translatedTitle;
          }
        }),
        map(() => void 0),
        finalize(() => {
          this.isApplyingTranslation = false;
          this.isTranslationInFlight = false;
          if (this.hasPendingRetranslate && this.activeTargetLanguage) {
            this.hasPendingRetranslate = false;
            this.scheduleRetranslate();
          }
        })
      );
  }

  translateRuntimeText(text: string, targetLanguage: string, googleSourceLanguage = 'auto'): Observable<string> {
    if (!this.activeTargets.has(targetLanguage)) {
      return of(text);
    }
    return this.googleTranslateApi.translateText(text, targetLanguage, googleSourceLanguage);
  }

  restoreOriginalTextNodes(): void {
    this.disconnectMutationObserver();
    this.translationRunId++;
    this.hasPendingRetranslate = false;

    this.originalTextByNode.forEach((originalText, node) => {
      if (node.isConnected) {
        node.textContent = originalText;
      }
    });
    this.originalTextByNode.clear();
    this.restoreOriginalAttributes();
    this.restoreOriginalDocumentTitle();
    this.activeTargetLanguage = null;
    this.activeSourceLanguage = 'auto';
  }

  private ensureMutationObserver(): void {
    if (this.mutationObserver || typeof MutationObserver === 'undefined') {
      return;
    }

    this.mutationObserver = new MutationObserver((mutations) => {
      if (this.isApplyingTranslation || !this.activeTargetLanguage) {
        return;
      }

      const hasRelevantMutation = mutations.some((mutation) => mutation.addedNodes.length > 0);

      if (hasRelevantMutation) {
        this.scheduleRetranslate();
      }
    });

    this.mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private scheduleRetranslate(): void {
    if (this.retranslateTimer) {
      clearTimeout(this.retranslateTimer);
    }

    this.retranslateTimer = setTimeout(() => {
      if (!this.activeTargetLanguage) {
        return;
      }
      this.translateCurrentPage(this.activeTargetLanguage, this.activeSourceLanguage).subscribe();
    }, 500);
  }

  private disconnectMutationObserver(): void {
    if (this.retranslateTimer) {
      clearTimeout(this.retranslateTimer);
      this.retranslateTimer = null;
    }

    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
  }

  private collectTranslatableTextNodes(): Text[] {
    const root = document.body;
    if (!root) {
      return [];
    }

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    let current = walker.nextNode();

    while (current) {
      const textNode = current as Text;
      const text = textNode.textContent || '';
      if (this.shouldTranslateNode(textNode, text)) {
        if (!this.originalTextByNode.has(textNode)) {
          this.originalTextByNode.set(textNode, text);
        }
        nodes.push(textNode);
      }
      current = walker.nextNode();
    }

    return nodes;
  }

  private collectTranslatableAttributes(): Array<{
    element: HTMLElement;
    attributeName: string;
    sourceValue: string;
  }> {
    if (!document.body) {
      return [];
    }

    const selector = this.translatableAttributes.map((attr) => `[${attr}]`).join(',');
    const elements = Array.from(document.body.querySelectorAll(selector)) as HTMLElement[];
    const entries: Array<{ element: HTMLElement; attributeName: string; sourceValue: string }> = [];

    elements.forEach((element) => {
      if (this.shouldSkipElement(element)) {
        return;
      }

      this.translatableAttributes.forEach((attributeName) => {
        const sourceValue = this.getSourceAttributeValue(element, attributeName);
        if (sourceValue) {
          entries.push({ element, attributeName, sourceValue });
        }
      });
    });

    return entries;
  }

  private shouldTranslateNode(node: Text, text: string): boolean {
    if (!text.trim()) {
      return false;
    }

    const parent = node.parentElement;
    if (!parent) {
      return false;
    }

    if (this.shouldSkipElement(parent)) {
      return false;
    }

    // Skip pure numbers, symbols, and whitespace-only tokens.
    return /[A-Za-z\u0900-\u097F]/.test(text);
  }

  private shouldSkipElement(element: HTMLElement): boolean {
    if (
      element.closest('[data-no-dynamic-translate]') ||
      element.closest('#google_translate_element') ||
      element.closest('.goog-te-banner-frame')
    ) {
      return true;
    }

    return this.blockedTags.has(element.tagName);
  }

  private shouldApplyRun(runId: number, targetLanguage: string, sourceLanguage: string): boolean {
    return (
      runId === this.translationRunId &&
      this.activeTargetLanguage === targetLanguage &&
      this.activeSourceLanguage === sourceLanguage
    );
  }

  private getSourceText(node: Text): string {
    return (this.originalTextByNode.get(node) || node.textContent || '').trim();
  }

  private getSourceAttributeValue(element: HTMLElement, attributeName: string): string {
    const currentValue = (element.getAttribute(attributeName) || '').trim();
    if (!currentValue) {
      return '';
    }

    let originalMap = this.originalAttributesByElement.get(element);
    if (!originalMap) {
      originalMap = new Map<string, string>();
      this.originalAttributesByElement.set(element, originalMap);
    }

    if (!originalMap.has(attributeName)) {
      originalMap.set(attributeName, currentValue);
    }

    return (originalMap.get(attributeName) || currentValue).trim();
  }

  private restoreOriginalAttributes(): void {
    if (!document.body) {
      return;
    }

    const selector = this.translatableAttributes.map((attr) => `[${attr}]`).join(',');
    const elements = Array.from(document.body.querySelectorAll(selector)) as HTMLElement[];

    elements.forEach((element) => {
      const originalMap = this.originalAttributesByElement.get(element);
      if (!originalMap) {
        return;
      }

      originalMap.forEach((value, attributeName) => {
        element.setAttribute(attributeName, value);
      });
      originalMap.clear();
    });
  }

  private getSourceDocumentTitle(): string {
    const currentTitle = (document.title || '').trim();
    if (!this.originalDocumentTitle && currentTitle) {
      this.originalDocumentTitle = currentTitle;
    }
    return this.originalDocumentTitle || currentTitle;
  }

  private restoreOriginalDocumentTitle(): void {
    if (this.originalDocumentTitle) {
      document.title = this.originalDocumentTitle;
    }
  }

  private applySpacingTemplate(source: string, translated: string): string {
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    return `${leading}${translated}${trailing}`;
  }
}
