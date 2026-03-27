import { SitePage } from "@/components/site/SitePage";
import { SiteShell } from "@/components/site/SiteShell";
import { createMetadata, createPage } from "@/lib/routes";

export const metadata = createMetadata("ru", "contact", "/contact");

export default function ContactPage() {
  return (
    <SiteShell locale="ru">
      <SitePage page={createPage("ru", "contact")} />
    </SiteShell>
  );
}
