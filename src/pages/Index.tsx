import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SplineHero from "@/components/landing/SplineHero";
import PlatformsSection from "@/components/landing/PlatformsSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FooterCTA from "@/components/landing/FooterCTA";
import Footer from "@/components/landing/Footer";
import CookieConsent from "@/components/landing/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SplineHero />
      <PlatformsSection />
      <SolutionsSection />
      <SocialProofSection />
      <FooterCTA />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
