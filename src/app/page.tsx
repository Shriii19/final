import PromotionalBanner from "@/components/sections/promotional-banner";
import NavigationHeader from "@/components/sections/navigation-header";
import HeroSection from "@/components/sections/hero-section";
import GlobalLocations from "@/components/sections/global-locations";
import PricingPlans from "@/components/sections/pricing-plans";
import FaqSection from "@/components/sections/faq-section";
import PlatformShowcase from "@/components/sections/platform-showcase";
import DiscordCta from "@/components/sections/discord-cta";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <PromotionalBanner />
      <NavigationHeader />
      
      <main className="pt-[117px]">
        <HeroSection />
        
        <GlobalLocations />
        <PricingPlans />
        <FaqSection />
        <PlatformShowcase />
        
        <section className="py-16 md:py-24 bg-[#0a0b0f]">
          <DiscordCta />
        </section>
      </main>

      <Footer />
    </div>
  );
}