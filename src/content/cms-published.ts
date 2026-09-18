type POCImage = { src: string; alt: string };

export type HomePocContent = { executiveHeading: string };
export type OperationsDispatchPocContent = { heroImage: POCImage };
export type PublishedSeo = { title?: string; description?: string; ogTitle?: string; ogDescription?: string; ogImageUrl?: string };

type Snapshot = {
  content: Record<string, { type: "TEXT" | "IMAGE"; value: { text?: string; assetId?: string; alt?: string; url?: string | null } }>;
  seo: PublishedSeo | null;
};

export const cmsPocPageIds = {
  home: "page_18d9c27e8dae4042ab232300098d30be",
  operationsDispatch: "page_3172146e8e9c42c5bfb06fa3276f5d85",
} as const;

const cmsPocIds = {
  homeExecutiveHeading: "cms_098fefb321f045babb6b2b405db2ed28",
  operationsDispatchHeroImage: "cms_e1c4d5fb48f141cfa030da3b70392fe8",
} as const;

async function getPublishedSnapshot(pageId: string): Promise<Snapshot | null> {
  const serverUrl = process.env.CMS_SERVER_URL;
  const token = process.env.CMS_PUBLIC_CONTENT_TOKEN;
  if (!serverUrl || !token) return null;
  try {
    const response = await fetch(`${serverUrl}/api/v1/public-content/pages/${pageId}?locale=en`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "force-cache",
      next: { tags: [`cms-page:${pageId}:en`] },
    });
    if (!response.ok) return null;
    return await response.json() as Snapshot;
  } catch {
    // A failed build/regeneration retains source defaults rather than producing empty HTML.
    return null;
  }
}

function publishedText(snapshot: Snapshot | null, contentId: string, fallback: string) {
  const value = snapshot?.content[contentId]?.value.text;
  return typeof value === "string" ? value : fallback;
}

function publishedImage(snapshot: Snapshot | null, contentId: string, fallback: POCImage): POCImage {
  const value = snapshot?.content[contentId]?.value;
  return value?.url && typeof value.alt === "string" ? { src: value.url, alt: value.alt } : fallback;
}

export async function resolveHomePocContent(): Promise<HomePocContent> {
  const snapshot = await getPublishedSnapshot(cmsPocPageIds.home);
  return { executiveHeading: publishedText(snapshot, cmsPocIds.homeExecutiveHeading, "Connect every part of your flight operation in one platform.") };
}

export async function resolveOperationsDispatchPocContent(): Promise<OperationsDispatchPocContent> {
  const snapshot = await getPublishedSnapshot(cmsPocPageIds.operationsDispatch);
  return { heroImage: publishedImage(snapshot, cmsPocIds.operationsDispatchHeroImage, { src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80", alt: "Workflow representation of JoyaFleet flight operations and dispatch activities" }) };
}

export async function resolvePageSeo(pageId: string): Promise<PublishedSeo | null> {
  return (await getPublishedSnapshot(pageId))?.seo ?? null;
}
