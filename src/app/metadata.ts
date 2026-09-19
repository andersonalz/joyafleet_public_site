import type { Metadata } from 'next';
import { DEFAULT_LOCALE, localeAlternates, localizePath, type Locale } from '../lib/locales';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joyafleet.com';

export const siteMetadataBase = new URL(siteUrl);

export function createPageMetadata({
  title,
  description,
  path,
  openGraphTitle = title,
  openGraphDescription = description,
  openGraphType = 'website',
  openGraphImage,
  locale = DEFAULT_LOCALE,
  availableLocales = [DEFAULT_LOCALE],
}: {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  openGraphType?: 'article' | 'website';
  openGraphImage?: string;
  locale?: Locale;
  availableLocales?: readonly Locale[];
}): Metadata {
  const localizedPath = localizePath(path, locale);
  const alternates = availableLocales.length > 1
    ? {
        canonical: localizedPath,
        languages: localeAlternates(path, availableLocales),
      }
    : { canonical: localizedPath };

  return {
    title: { absolute: title },
    description,
    alternates,
    openGraph: {
      type: openGraphType,
      url: localizedPath,
      title: openGraphTitle,
      description: openGraphDescription,
      siteName: 'JoyaFleet',
      locale,
      images: openGraphImage ? [openGraphImage] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle,
      description: openGraphDescription,
      images: openGraphImage ? [openGraphImage] : undefined,
    },
  };
}
