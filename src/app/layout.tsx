import type { Metadata } from 'next';
import '../index.css';
import { SiteShell } from '../components/SiteShell';
import { siteMetadataBase } from './metadata';

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
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
