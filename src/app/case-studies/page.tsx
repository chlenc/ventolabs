import { SitePage } from "@/components/site/SitePage";
import { SiteShell } from "@/components/site/SiteShell";
import { createMetadata, createPage } from "@/lib/routes";

export const metadata = createMetadata("ru", "case-studies", "/case-studies");

export default function CaseStudiesPage() {
  return (
    <SiteShell locale="ru">
      <SitePage page={createPage("ru", "case-studies")} />
    </SiteShell>
  );
}
