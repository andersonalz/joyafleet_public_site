export const DEFAULT_LOCALE = 'en' as const;

export const SUPPORTED_LOCALES = ['en', 'ar', 'fr', 'de', 'fa'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];
export type TextDirection = 'ltr' | 'rtl';

export const LOCALE_CONFIG: Record<Locale, { direction: TextDirection; hreflang: Locale }> = {
  en: { direction: 'ltr', hreflang: 'en' },
  ar: { direction: 'rtl', hreflang: 'ar' },
  fr: { direction: 'ltr', hreflang: 'fr' },
  de: { direction: 'ltr', hreflang: 'de' },
  fa: { direction: 'rtl', hreflang: 'fa' },
};

export function isLocale(value: string): value is Locale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function getLocaleDirection(locale: Locale): TextDirection {
  return LOCALE_CONFIG[locale].direction;
}

/**
 * English is canonical at its existing prefixless URL. Every other locale
 * receives a prefix once that localized route is actually implemented.
 */
export function localizePath(path: string, locale: Locale = DEFAULT_LOCALE): string {
  const normalizedPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? normalizedPath || '/' : `/${locale}${normalizedPath || ''}`;
}

/**
 * Emit alternates only for routes that have been deployed and are indexable.
 * This prevents metadata and sitemaps from advertising future locale URLs.
 */
export function localeAlternates(path: string, availableLocales: readonly Locale[]): Record<string, string> {
  return Object.fromEntries(
    availableLocales.map((locale) => [LOCALE_CONFIG[locale].hreflang, localizePath(path, locale)]),
  );
}
