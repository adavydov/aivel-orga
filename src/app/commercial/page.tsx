import type { Metadata } from "next";
import { CommercialBoundariesSection } from "@/components/commercial/CommercialBoundariesSection";
import { CommercialFunctionsSection } from "@/components/commercial/CommercialFunctionsSection";
import { CommercialHeroSection } from "@/components/commercial/CommercialHeroSection";
import { CommercialSiteHeader } from "@/components/commercial/CommercialSiteHeader";
import { CommercialTargetOrgSection } from "@/components/commercial/CommercialTargetOrgSection";

export const metadata: Metadata = {
  title: "Коммерческий директор Aivel — контракт роли",
  description:
    "Функции, целевая оргструктура, границы и метрики роли коммерческого директора Aivel.",
  openGraph: {
    title: "Коммерческий директор Aivel — контракт роли",
    description:
      "Четыре машины выручки: Inbound, Partners, Enterprise New Business и KAM.",
    type: "website",
    locale: "ru_RU",
    url: "https://adavydov.github.io/aivel-orga/commercial/",
    siteName: "Aivel",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Коммерческий директор Aivel — контракт роли",
    description:
      "Четыре машины выручки: Inbound, Partners, Enterprise New Business и KAM.",
    images: [],
  },
};

export default function CommercialDirectorPage() {
  return (
    <>
      <CommercialSiteHeader />
      <main id="content">
        <CommercialHeroSection />
        <div className="shell">
          <div className="story">
            <CommercialFunctionsSection />
            <CommercialTargetOrgSection />
            <CommercialBoundariesSection />
          </div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="shell">
          <span>Aivel · контракт роли</span>
          <span>CEO ↔ коммерческий директор</span>
        </div>
      </footer>
    </>
  );
}
