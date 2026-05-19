import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import OptionsSection from "@/components/sections/OptionsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="overflow-hidden  bg-white text-reve-black">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <OptionsSection />
        <ProcessSection />
        <TestimonialsSection />
        {/* <FinalCtaSection /> */}
      </main>
      <Footer />
    </>
  );
}
