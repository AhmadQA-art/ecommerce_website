import React from "react";
import { motion } from "framer-motion";
import Image from "components/AppImage";

const CollectionHero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
        <Image
          src="/assets/images/electric_bike_2.png"
          alt="Premium electric bike"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="display-medium mb-6 text-white">Our E-Bike Collection</h1>
          <p className="body-large text-white text-opacity-90 mb-8">
            Discover our range of premium electric bikes designed for the modern
            urban rider. Each model combines cutting-edge technology with
            timeless design to deliver an exceptional riding experience.
          </p>
        </motion.div>
      </div>
      
      {/* Background Elements */}
      <motion.div 
        className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary bg-opacity-5 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.div 
        className="absolute -top-20 -left-20 w-80 h-80 bg-primary bg-opacity-5 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
    </section>
  );
};

export default CollectionHero;