import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SitePage } from "@/components/site/SitePage";
import { SiteShell } from "@/components/site/SiteShell";
import { createMetadata, createPage, getPrefixedLocaleParams, isPrefixedLocale } from "@/lib/routes";

type Props = {
  params: Promise<{ locale: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getPrefixedLocaleParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  return createMetadata(locale, "about", "/about");
}

export default async function LocalizedAboutPage({ params }: Props) {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  return (
    <SiteShell locale={locale}>
      <SitePage page={createPage(locale, "about")} />
    </SiteShell>
  );
}
