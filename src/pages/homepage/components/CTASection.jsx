import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="display-medium text-white mb-6">
            Ready to Transform Your Commute?
          </h2>
          <p className="body-large text-white text-opacity-90 mb-10">
            Join thousands of riders who have already made the switch to a
            smarter, more sustainable way of getting around the city.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/collection-category-page" className="btn-primary bg-white text-primary py-3 px-8 rounded-md inline-flex items-center justify-center"
            >
              Shop E-Bikes
            </Link>
            <Link
              to="/test-ride-demo-booking" className="btn-secondary bg-transparent text-white border border-white py-3 px-8 rounded-md inline-flex items-center justify-center"
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