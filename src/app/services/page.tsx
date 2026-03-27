import { SitePage } from "@/components/site/SitePage";
import { SiteShell } from "@/components/site/SiteShell";
import { createMetadata, createPage } from "@/lib/routes";

export const metadata = createMetadata("ru", "services", "/services");

export default function ServicesPage() {
  return (
    <SiteShell locale="ru">
      <SitePage page={createPage("ru", "services")} />
    </SiteShell>
  );
}
