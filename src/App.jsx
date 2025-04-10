import { CompanyLogo } from "./components/CompanyLogo";
import { FeaturesSection } from "./components/FeaturesSection";
import { FooterSection } from "./components/FooterSection";
import { HeroSection } from "./components/HeroSection";
import { MonitorSection } from "./components/MonitorSection";
import { Navbar } from "./components/Navbar";
import { NewsLetterSection } from "./components/NewsLetterSection";
import { PricingSection } from "./components/PricingSection";
import { PurposeSection } from "./components/PurposeSection";
import { ScheduleSection } from "./components/ScheduleSection";
import { ServiceSection } from "./components/ServiceSection";
import TestimonialSection from "./components/TestimonialSection";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-4 -left-4 w-[800px] h-[600px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      <div className="overflow-hidden">
        <Navbar />
        <HeroSection />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServiceSection />
        <TestimonialSection />
        <NewsLetterSection />
        <FooterSection />
      </div>
    </main>
  );
}

export default App;
