type JsonLd = Record<string, unknown>;

function serializeJsonLd(value: JsonLd): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export function StructuredData({ value }: { value: JsonLd }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(value) }}
    />
  );
}

/**
 * Kept frontend-owned: this only represents information already visible in
 * the global site identity. Page-specific schemas belong beside their routes.
 */
export function OrganizationStructuredData({ siteUrl }: { siteUrl: URL }) {
  return (
    <StructuredData
      value={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'JoyaFleet',
        url: siteUrl.toString(),
      }}
    />
  );
}
