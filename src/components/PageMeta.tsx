import { useEffect } from 'react';

interface PageMetaProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

function upsertMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
): () => void {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  const previousContent = element.getAttribute('content');
  element.setAttribute('content', content);

  return () => {
    if (previousContent === null) {
      element?.remove();
      return;
    }

    element?.setAttribute('content', previousContent);
  };
}

function upsertLink(rel: string, href: string): () => void {
  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  const previousHref = element.getAttribute('href');
  element.setAttribute('href', href);

  return () => {
    if (previousHref === null) {
      element?.remove();
      return;
    }

    element?.setAttribute('href', previousHref);
  };
}

export function PageMeta({ title, description, url, image }: PageMetaProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const cleanups = [
      upsertMeta('name', 'description', description),
      upsertMeta('property', 'og:type', 'website'),
      upsertMeta('property', 'og:title', title),
      upsertMeta('property', 'og:description', description),
      upsertMeta('property', 'og:url', url),
      upsertMeta('property', 'og:image', image),
      upsertMeta('name', 'twitter:card', 'summary_large_image'),
      upsertMeta('name', 'twitter:title', title),
      upsertMeta('name', 'twitter:description', description),
      upsertMeta('name', 'twitter:image', image),
      upsertLink('canonical', url),
    ];

    return () => {
      document.title = previousTitle;
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [title, description, url, image]);

  return null;
}
