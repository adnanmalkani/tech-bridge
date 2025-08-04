"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import SuccessStories from "@/components/SuccessStories";
import EventsSection from "@/components/EventsSection";
import MissionSection from "@/components/MissionSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main
      className={`min-h-screen transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <Header />
      <div className="animate-fadeInUp">
        <HeroSection />
      </div>
      <div className="animate-fadeInUp animation-delay-200">
        <ProgramsSection />
      </div>
      <div className="animate-fadeInUp animation-delay-400">
        <SuccessStories />
      </div>
      <div className="animate-fadeInUp animation-delay-600">
        <EventsSection />
      </div>
      <div className="animate-fadeInUp animation-delay-800">
        <MissionSection />
      </div>
      <div className="animate-fadeInUp animation-delay-1000">
        <AdmissionsSection />
      </div>
      <Footer />
    </main>
  );
}
