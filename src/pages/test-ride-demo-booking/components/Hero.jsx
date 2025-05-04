import React from "react";
import { motion } from "framer-motion";
import Image from "components/AppImage";
import Icon from '../../../components/AppIcon';


const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-gray-100">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="People enjoying test rides on Cowboy e-bikes" className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="display-large text-white mb-6">
            Experience the Ride Before You Decide
          </h1>
          <p className="body-large text-white text-opacity-90 mb-8">
            Book a free test ride and feel the difference of a Cowboy e-bike. 
            Our experts will guide you through all features and answer your questions.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center space-x-2 text-white mb-8"
          >
            <span className="flex items-center">
              <Icon name="Clock" size={18} className="mr-2" />
              30-minute session
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="flex items-center">
              <Icon name="MapPin" size={18} className="mr-2" />
              Multiple locations
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span className="flex items-center">
              <Icon name="Calendar" size={18} className="mr-2" />
              Book in minutes
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;