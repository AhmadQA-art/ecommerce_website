import React from "react";
import { motion } from "framer-motion";
import Image from "components/AppImage";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cowboy brand story hero image" className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="display-large text-white mb-6">
            Redefining Urban Mobility
          </h1>
          <p className="body-large text-white text-opacity-90 mb-8 max-w-2xl">
            We're on a mission to transform how people move through cities with
            thoughtfully designed electric bikes that combine technology,
            craftsmanship, and sustainability.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to discover our story</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;