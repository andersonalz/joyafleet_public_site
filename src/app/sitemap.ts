import type { MetadataRoute } from 'next';
import { BLOG_POSTS } from '../content/blog';
import { RELEASE_UPDATES } from '../content/updates';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joyafleet.com';
const canonicalStaticPaths = [
  '/',
  '/about',
  '/platform',
  '/platform/flight-scheduling',
  '/platform/operations-dispatch',
  '/platform/crew-management-ftl',
  '/platform/fleet-maintenance',
  '/platform/reporting-analytics',
  '/platform/integrations',
  '/solutions',
  '/security',
  '/blog',
  '/updates',
  '/contact',
  '/our-apps',
] as const;

function toUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...canonicalStaticPaths.map((path) => ({
      url: toUrl(path),
      changeFrequency: path === '/' ? 'monthly' : 'monthly' as const,
      priority: path === '/' ? 1 : 0.8,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: toUrl(`/blog/${post.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...RELEASE_UPDATES.map((release) => ({
      url: toUrl(`/updates/${release.slug}`),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
