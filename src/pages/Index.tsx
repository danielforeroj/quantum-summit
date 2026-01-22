import { useEffect } from "react";
import AppErrorBoundary from "@/components/AppErrorBoundary";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import WhySection from "@/components/WhySection";
import WhoAttends from "@/components/WhoAttends";
import SummitSection from "@/components/SummitSection";
import PanelThemes from "@/components/PanelThemes";
import MixerSection from "@/components/MixerSection";
import SponsorSection from "@/components/SponsorSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Component mounted
  }, []);

  return (
    <AppErrorBoundary>
      <div className="relative min-h-screen overflow-hidden">
        {/* Aurora background effect */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 100% at -5% 40%, hsl(210 100% 55% / 0.45) 0%, hsl(215 100% 45% / 0.15) 30%, transparent 55%),
              radial-gradient(ellipse 50% 80% at 10% 15%, hsl(200 100% 60% / 0.3) 0%, transparent 45%),
              radial-gradient(ellipse 40% 60% at 5% 75%, hsl(195 100% 50% / 0.2) 0%, transparent 40%),
              hsl(220 70% 4%)
            `
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <TrustStrip />
            <WhySection />
            <WhoAttends />
            <SummitSection />
            <PanelThemes />
            <MixerSection />
            <SponsorSection />
          </main>
          <Footer />
        </div>
      </div>
    </AppErrorBoundary>
  );
};

export default Index;
