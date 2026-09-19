import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Updates from '../../../views/Updates';
import { RELEASE_UPDATES } from '../../../content/updates';
import { createPageMetadata } from '../../metadata';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return RELEASE_UPDATES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = RELEASE_UPDATES.find((release) => release.slug === slug);

  if (!update) return {};

  return createPageMetadata({
    title: `${update.version}: ${update.title}`,
    description: update.summary,
    path: `/updates/${update.slug}`,
    openGraphTitle: update.title,
    openGraphDescription: update.summary,
    openGraphType: 'article',
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const update = RELEASE_UPDATES.find((release) => release.slug === slug);

  if (update) return <Updates />;

  const legacyUpdate = RELEASE_UPDATES.find((release) => release.id === slug);
  if (legacyUpdate) redirect(`/updates/${legacyUpdate.slug}`);

  notFound();
}
