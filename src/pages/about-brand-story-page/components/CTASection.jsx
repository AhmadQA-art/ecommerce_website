import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-1 mb-6">
            Join the Cowboy Community
          </h2>
          <p className="body-large text-gray-500 mb-10">
            Experience the future of urban mobility with a Cowboy electric bike.
            Join thousands of riders who have already made the switch to a
            smarter, more sustainable way of getting around the city.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/collection-category-page" className="btn-primary py-3 px-8 rounded-md inline-flex items-center justify-center"
            >
              Explore Our E-Bikes
            </Link>
            <Link
              to="/test-ride-demo-booking" className="btn-secondary py-3 px-8 rounded-md inline-flex items-center justify-center"
            >
              Book a Test Ride
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;