import { SitePage } from "@/components/site/SitePage";
import { SiteShell } from "@/components/site/SiteShell";
import { createMetadata, createPage } from "@/lib/routes";

export const metadata = createMetadata("ru", "how-we-work", "/how-we-work");

export default function HowWeWorkPage() {
  return (
    <SiteShell locale="ru">
      <SitePage page={createPage("ru", "how-we-work")} />
    </SiteShell>
  );
}
