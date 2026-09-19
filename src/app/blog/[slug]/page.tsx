import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Blog from '../../../views/Blog';
import { BLOG_POSTS } from '../../../content/blog';
import { createPageMetadata } from '../../metadata';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = BLOG_POSTS.find((post) => post.slug === slug);

  if (!article) return {};

  return createPageMetadata({
    title: `${article.title} | Joya Fleet Journal`,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    openGraphTitle: article.title,
    openGraphDescription: article.excerpt,
    openGraphType: 'article',
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const article = BLOG_POSTS.find((post) => post.slug === slug);

  if (article) return <Blog />;

  const legacyArticle = BLOG_POSTS.find((post) => post.id === slug);
  if (legacyArticle) redirect(`/blog/${legacyArticle.slug}`);

  notFound();
}
