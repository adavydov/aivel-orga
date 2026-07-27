import { BoundariesSection } from "@/components/BoundariesSection";
import { ClosingSection } from "@/components/ClosingSection";
import { ContextFocusSection } from "@/components/ContextFocusSection";
import { FunctionsSection } from "@/components/FunctionsSection";
import { HeroSection } from "@/components/HeroSection";
import { MetricsSection } from "@/components/MetricsSection";
import { SiteHeader } from "@/components/SiteHeader";
import { TargetOrgSection } from "@/components/TargetOrgSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="content">
        <HeroSection />
        <div className="shell">
          <div className="story">
            <ContextFocusSection />
            <FunctionsSection />
            <TargetOrgSection />
            <BoundariesSection />
            <MetricsSection />
            <ClosingSection />
          </div>
        </div>
      </main>
      <footer className="site-footer">
        <div className="shell">
          <span>Aivel · контракт роли</span>
          <span>CEO ↔ директор по маркетингу</span>
        </div>
      </footer>
    </>
  );
}
