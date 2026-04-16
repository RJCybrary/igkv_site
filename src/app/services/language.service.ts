
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { DynamicPageTranslateService } from './dynamic-page-translate.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly supportedLanguages = ['en', 'hn', 'uz', 'ru'];
  private readonly localLanguages = new Set(['en', 'hn']);
  private readonly dynamicLanguages = new Set(['uz', 'ru']);
  private readonly storageKey = 'app_language';
  private googleSourceLanguage: 'auto' | 'en' | 'hi' = 'auto';

  private currentLanguageSubject = new BehaviorSubject<string>('en');
  readonly currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(
    private translate: TranslateService,
    private dynamicPageTranslateService: DynamicPageTranslateService
  ) {
    this.translate.addLangs(this.supportedLanguages);
    this.translate.setDefaultLang('en');
  }

  initializeLanguage(): void {
    const savedLanguage =
      localStorage.getItem(this.storageKey) ||
      localStorage.getItem('language') ||
      localStorage.getItem('lang') ||
      'en';

    this.switchLanguage(savedLanguage);
  }

  switchLanguage(language: string): void {
    const selectedLanguage = this.normalizeLanguage(language);
    const ngxBaseBeforeSwitch =
      this.translate.currentLang && this.localLanguages.has(this.translate.currentLang)
        ? this.translate.currentLang
        : 'en';

    this.currentLanguageSubject.next(selectedLanguage);
    this.persistLanguage(selectedLanguage);

    if (this.localLanguages.has(selectedLanguage)) {
      // Use local JSON translations directly for Hindi/English (no Google API).
      this.googleSourceLanguage = selectedLanguage === 'hn' ? 'hi' : 'en';
      this.translate
        .use(selectedLanguage)
        .pipe(take(1))
        .subscribe(() => {
          this.dynamicPageTranslateService.restoreOriginalTextNodes();
        });
      return;
    }

    // Uzbek / Russian: restore any prior API overlay, keep en/hn UI strings, then translate the full page via Google Cloud Translation API.
    this.dynamicPageTranslateService.restoreOriginalTextNodes();
    // Use auto-detection so mixed API payload text (Hindi/English/etc.) is translated correctly.
    this.googleSourceLanguage = 'auto';

    this.translate
      .use(ngxBaseBeforeSwitch)
      .pipe(take(1))
      .subscribe(() => {
        setTimeout(() => {
          this.dynamicPageTranslateService
            .translateCurrentPage(selectedLanguage, this.googleSourceLanguage)
            .subscribe();
        }, 0);
      });
  }

  // Backward-compatible alias for existing components.
  setLanguage(language: string): void {
    this.switchLanguage(language);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  isApiLanguage(language: string = this.getCurrentLanguage()): boolean {
    return this.dynamicLanguages.has(language);
  }

  translateRuntimeText(text: string): Observable<string> {
    if (!text) {
      return of(text);
    }

    const currentLanguage = this.getCurrentLanguage();
    if (!this.isApiLanguage(currentLanguage)) {
      return of(text);
    }

    return this.dynamicPageTranslateService.translateRuntimeText(
      text,
      currentLanguage,
      'auto'
    );
  }

  retranslateCurrentPage(): void {
    const currentLanguage = this.getCurrentLanguage();
    if (!this.isApiLanguage(currentLanguage)) {
      return;
    }

    this.googleSourceLanguage = 'auto';

    setTimeout(() => {
      this.dynamicPageTranslateService
        .translateCurrentPage(currentLanguage, this.googleSourceLanguage)
        .subscribe();
    }, 0);
  }

  private normalizeLanguage(language: string): string {
    if (!this.supportedLanguages.includes(language)) {
      return 'en';
    }
    return language;
  }

  private persistLanguage(language: string): void {
    localStorage.setItem(this.storageKey, language);
    localStorage.setItem('language', language);
    localStorage.setItem('lang', language);
  }
}