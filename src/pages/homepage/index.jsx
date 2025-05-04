import React, { useEffect } from "react";
import { motion, useScroll } from "framer-motion";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCategorySelector from "./components/ProductCategorySelector";
import FeaturesSection from "./components/FeaturesSection";
import SustainabilitySection from "./components/SustainabilitySection";
import TestimonialsSection from "./components/TestimonialsSection";
import BlogPreviewSection from "./components/BlogPreviewSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

const Homepage = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Set page title
    document.title = "Cowboy - Premium Electric Bikes";
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
        <Hero />

        {/* Product Category Selector */}
        <ProductCategorySelector />

        {/* Features Section */}
        <FeaturesSection />

        {/* Sustainability Section */}
        <SustainabilitySection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Blog Preview Section */}
        <BlogPreviewSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;