import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle: string;
  ogDescription: string;
}

function getOrCreateDescriptionMeta(): HTMLMetaElement {
  const elements = Array.from(document.head.querySelectorAll<HTMLMetaElement>('meta[name="description"]'));
  let element = elements[0];
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', 'description');
    document.head.appendChild(element);
  }
  for (let i = 1; i < elements.length; i++) {
    elements[i].remove();
  }
  return element;
}

function getOrCreateCanonicalLink(): HTMLLinkElement {
  const elements = Array.from(document.head.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]'));
  let element = elements[0];
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  for (let i = 1; i < elements.length; i++) {
    elements[i].remove();
  }
  return element;
}

function getOrCreateOgTitleMeta(): HTMLMetaElement {
  const elements = Array.from(document.head.querySelectorAll<HTMLMetaElement>('meta[property="og:title"]'));
  let element = elements[0];
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', 'og:title');
    document.head.appendChild(element);
  }
  for (let i = 1; i < elements.length; i++) {
    elements[i].remove();
  }
  return element;
}

function getOrCreateOgDescriptionMeta(): HTMLMetaElement {
  const elements = Array.from(document.head.querySelectorAll<HTMLMetaElement>('meta[property="og:description"]'));
  let element = elements[0];
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', 'og:description');
    document.head.appendChild(element);
  }
  for (let i = 1; i < elements.length; i++) {
    elements[i].remove();
  }
  return element;
}

export function useSEO({
  title,
  description,
  canonicalPath,
  ogTitle,
  ogDescription
}: SEOProps) {
  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    document.title = title;

    const metaDescription = getOrCreateDescriptionMeta();
    metaDescription.setAttribute('content', description);

    const canonicalLink = getOrCreateCanonicalLink();
    const canonicalUrl = new URL(canonicalPath, window.location.origin).toString();
    canonicalLink.setAttribute('href', canonicalUrl);

    const ogTitleMeta = getOrCreateOgTitleMeta();
    ogTitleMeta.setAttribute('content', ogTitle);

    const ogDescMeta = getOrCreateOgDescriptionMeta();
    ogDescMeta.setAttribute('content', ogDescription);
  }, [title, description, canonicalPath, ogTitle, ogDescription]);
}
