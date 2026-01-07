import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { DepartmentsSection } from "@/components/sections/DepartmentsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InnovationSection } from "@/components/sections/InnovationSection";
import { CTASection } from "@/components/sections/CTASection";
import { StickyCTA } from "@/components/shared/StickyCTA";
import { AIAssistant } from "@/components/shared/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        <TrustBar />
        <ImpactStats />
        <DepartmentsSection />
        <NewsSection />
        <TestimonialsSection />
        <InnovationSection />
        <CTASection />
      </main>

      <Footer />
      <StickyCTA />
      <AIAssistant />
    </div>
  );
};

export default Index;
