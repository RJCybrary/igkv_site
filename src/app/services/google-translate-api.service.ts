import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface GoogleTranslateResponse {
  data?: {
    translations?: Array<{
      translatedText?: string;
    }>;
  };
}

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateApiService {
  private readonly endpoint =
    environment.googleTranslateApiUrl || 'https://translation.googleapis.com/language/translate/v2';
  private readonly apiKey = environment.googleTranslateApiKey || '';
  private readonly cache = new Map<string, string>();
  private readonly inflight = new Map<string, Observable<string>>();

  constructor(private http: HttpClient) {}

  translateText(text: string, target: string, source = 'auto'): Observable<string> {
    const cleanText = (text || '').trim();
    if (!cleanText || !target || (source !== 'auto' && target === source)) {
      return of(text);
    }

    const cacheKey = this.createCacheKey(source, target, cleanText);
    const cached = this.cache.get(cacheKey);
    if (cached) {
      return of(cached);
    }

    const pending = this.inflight.get(cacheKey);
    if (pending) {
      return pending;
    }

    if (!this.apiKey) {
      // Keep UI stable if key is missing.
      return of(text);
    }

    const payload: {
      q: string;
      target: string;
      source?: string;
      format: 'text';
    } = {
      q: cleanText,
      target,
      format: 'text'
    };

    // Let Google auto-detect input language when source is not explicitly pinned.
    if (source && source !== 'auto') {
      payload.source = source;
    }

    const request$ = this.http
      .post<GoogleTranslateResponse>(this.endpoint, payload, {
        params: new HttpParams().set('key', this.apiKey)
      })
      .pipe(
        map((response) => response?.data?.translations?.[0]?.translatedText || text),
        map((value) => this.decodeHtmlEntities(value)),
        tap((translated) => this.cache.set(cacheKey, translated)),
        catchError(() => of(text)),
        tap(() => this.inflight.delete(cacheKey)),
        shareReplay(1)
      );

    this.inflight.set(cacheKey, request$);
    return request$;
  }

  translateBatch(texts: string[], target: string, source = 'auto'): Observable<Map<string, string>> {
    const uniqueTexts = Array.from(
      new Set(
        (texts || [])
          .map((item) => (item || '').trim())
          .filter((item) => !!item)
      )
    );

    if (!uniqueTexts.length) {
      return of(new Map<string, string>());
    }

    const requests = uniqueTexts.map((text) =>
      this.translateText(text, target, source).pipe(map((translated) => ({ text, translated })))
    );

    return forkJoin(requests).pipe(
      map((items) => {
        const result = new Map<string, string>();
        items.forEach(({ text, translated }) => result.set(text, translated));
        return result;
      })
    );
  }

  private createCacheKey(source: string, target: string, text: string): string {
    return `${source}:${target}:${text}`;
  }

  private decodeHtmlEntities(value: string): string {
    if (typeof document === 'undefined') {
      return value;
    }

    const textArea = document.createElement('textarea');
    textArea.innerHTML = value;
    return textArea.value;
  }
}
