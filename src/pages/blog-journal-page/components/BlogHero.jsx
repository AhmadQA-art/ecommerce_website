import React from "react";
import { motion } from "framer-motion";

const BlogHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="heading-1 mb-6">Our Journal</h1>
          <p className="body-large text-gray-600 mb-8">
            Stories, insights, and guides from the world of e-bikes and sustainable urban mobility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;
