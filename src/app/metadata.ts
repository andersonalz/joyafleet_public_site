import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joyafleet.com';

export const siteMetadataBase = new URL(siteUrl);

export function createPageMetadata({
  title,
  description,
  path,
  openGraphTitle = title,
  openGraphDescription = description,
}: {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      url: path,
      title: openGraphTitle,
      description: openGraphDescription,
      siteName: 'JoyaFleet',
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle,
      description: openGraphDescription,
    },
  };
}
