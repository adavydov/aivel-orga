import type { Metadata } from "next";
import { CommercialBoundariesSection } from "@/components/commercial/CommercialBoundariesSection";
import { CommercialFunctionsSection } from "@/components/commercial/CommercialFunctionsSection";
import { CommercialHeroSection } from "@/components/commercial/CommercialHeroSection";
import { CommercialSiteHeader } from "@/components/commercial/CommercialSiteHeader";
import { CommercialTargetOrgSection } from "@/components/commercial/CommercialTargetOrgSection";

export const metadata: Metadata = {
  title: "Директор по продажам СМБ Aivel — контракт роли",
  description:
    "Функции, целевая оргструктура, границы и метрики роли директора по продажам СМБ Aivel.",
  openGraph: {
    title: "Директор по продажам СМБ Aivel — контракт роли",
    description:
      "Действующая база, новые клиенты и цифровая аналитика продаж.",
    type: "website",
    locale: "ru_RU",
    url: "https://adavydov.github.io/aivel-orga/commercial/",
    siteName: "Aivel",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Директор по продажам СМБ Aivel — контракт роли",
    description:
      "Действующая база, новые клиенты и цифровая аналитика продаж.",
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
          <span>CEO ↔ директор по продажам СМБ</span>
        </div>
      </footer>
    </>
  );
}
