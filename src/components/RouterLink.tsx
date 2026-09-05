import NextLink, { type LinkProps } from 'next/link';
import type { AnchorHTMLAttributes } from 'react';

type RouterLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
  Omit<LinkProps, 'href'> & {
    to: LinkProps['href'];
  };

/**
 * Keeps the existing link markup intact while delegating navigation to Next.js.
 */
export default function RouterLink({ to, ...props }: RouterLinkProps) {
  return <NextLink href={to} {...props} />;
}
