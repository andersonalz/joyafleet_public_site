import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://joyafleet.com';
const paths = ['/', '/about', '/platform', '/platform/flight-scheduling', '/platform/operations-dispatch', '/platform/crew-management-ftl', '/platform/fleet-maintenance', '/platform/reporting-analytics', '/platform/integrations', '/solutions', '/security', '/blog', '/updates', '/contact', '/our-apps'];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: new URL(path, siteUrl).toString(), lastModified: new Date(), changeFrequency: 'monthly', priority: path === '/' ? 1 : 0.8 }));
}
