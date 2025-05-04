import React, { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

// Components
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import TimelineSection from "./components/TimelineSection";
import DesignPhilosophySection from "./components/DesignPhilosophySection";
import SustainabilitySection from "./components/SustainabilitySection";
import TeamSection from "./components/TeamSection";
import QuoteSection from "./components/QuoteSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const AboutBrandStoryPage = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Set page title
    document.title = "Our Story | Cowboy - Premium Electric Bikes";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Mission Section */}
        <MissionSection />

        {/* Timeline Section */}
        <TimelineSection />

        {/* Design Philosophy Section */}
        <DesignPhilosophySection />

        {/* Sustainability Section */}
        <SustainabilitySection />

        {/* Team Section */}
        <TeamSection />

        {/* Quote Section */}
        <QuoteSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutBrandStoryPage;