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

  return createMetadata(locale, "how-we-work", "/how-we-work");
}

export default async function LocalizedHowWeWorkPage({ params }: Props) {
  const { locale } = await params;

  if (!isPrefixedLocale(locale)) {
    notFound();
  }

  return (
    <SiteShell locale={locale}>
      <SitePage page={createPage(locale, "how-we-work")} />
    </SiteShell>
  );
}
