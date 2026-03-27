import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SitePage } from "@/components/site/SitePage";
import { SiteShell } from "@/components/site/SiteShell";
import { createMetadata, createServicePage, servicePageSlugs } from "@/lib/routes";
import { isServiceSlug } from "@/lib/site";

type Props = {
  params: Promise<{ service: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePageSlugs.map((service) => ({ service }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;

  if (!isServiceSlug(service)) {
    notFound();
  }

  return createMetadata("ru", "services", `/services/${service}`, service);
}

export default async function ServicePage({ params }: Props) {
  const { service } = await params;
  const page = createServicePage("ru", service);

  if (!page) {
    notFound();
  }

  return (
    <SiteShell locale="ru">
      <SitePage page={page} />
    </SiteShell>
  );
}
