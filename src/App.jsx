import { CompanyLogo } from "./components/CompanyLogo";
import { FeaturesSection } from "./components/FeaturesSection";
import { HeroSection } from "./components/HeroSection";
import { MonitorSection } from "./components/MonitorSection";
import { Navbar } from "./components/Navbar";
import { PurposeSection } from "./components/PurposeSection";
import { ScheduleSection } from "./components/ScheduleSection";

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
      </div>
    </main>
  );
}

export default App;
