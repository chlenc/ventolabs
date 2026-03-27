import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SitePage } from "@/components/site/SitePage";
import { SiteShell } from "@/components/site/SiteShell";
import {
  createMetadata,
  createServicePage,
  getPrefixedLocaleParams,
  isPrefixedLocale,
  servicePageSlugs,
} from "@/lib/routes";
import { isServiceSlug } from "@/lib/site";

type Props = {
  params: Promise<{ locale: string; service: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPrefixedLocaleParams().flatMap(({ locale }) =>
    servicePageSlugs.map((service) => ({ locale, service })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, service } = await params;

  if (!isPrefixedLocale(locale) || !isServiceSlug(service)) {
    notFound();
  }

  return createMetadata(locale, "services", `/services/${service}`, service);
}

export default async function LocalizedServicePage({ params }: Props) {
  const { locale, service } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  const page = createServicePage(locale, service);

  if (!page) {
    notFound();
  }

  return (
    <SiteShell locale={locale}>
      <SitePage page={page} />
    </SiteShell>
  );
}
