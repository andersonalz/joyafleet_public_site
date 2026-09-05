/**
 * Compatibility shim for unchanged page components.
 * Route-level metadata is emitted on the server via Next.js's Metadata API.
 */
export function useSEO(_metadata: {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle: string;
  ogDescription: string;
}) {}
