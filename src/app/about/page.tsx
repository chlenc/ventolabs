import { SitePage } from "@/components/site/SitePage";
import { SiteShell } from "@/components/site/SiteShell";
import { createMetadata, createPage } from "@/lib/routes";

export const metadata = createMetadata("ru", "about", "/about");

export default function AboutPage() {
  return (
    <SiteShell locale="ru">
      <SitePage page={createPage("ru", "about")} />
    </SiteShell>
  );
}
