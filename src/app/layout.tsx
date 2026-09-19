import type { Metadata } from 'next';
import '../index.css';
import { SiteShell } from '../components/SiteShell';
import { siteMetadataBase } from './metadata';
import { OrganizationStructuredData } from '../components/StructuredData';
import { DEFAULT_LOCALE, getLocaleDirection } from '../lib/locales';

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: {
    default: 'JoyaFleet | Cloud-Based Flight Management Software',
    template: '%s | JoyaFleet',
  },
  description: 'JoyaFleet is a cloud-based Flight Management Software platform for connected aviation operations.',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={DEFAULT_LOCALE} dir={getLocaleDirection(DEFAULT_LOCALE)}>
      <body>
        <OrganizationStructuredData siteUrl={siteMetadataBase} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
