import React from "react";
import { motion } from "framer-motion";

const QuoteSection = () => {
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
          <svg
            width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-8 text-white opacity-50"
          >
            <path
              d="M3 21C3 16.0294 7.02944 12 12 12C16.9706 12 21 16.0294 21 21M16.5 6.5C16.5 9.26142 14.2614 11.5 11.5 11.5C8.73858 11.5 6.5 9.26142 6.5 6.5C6.5 3.73858 8.73858 1.5 11.5 1.5C14.2614 1.5 16.5 3.73858 16.5 6.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
          <p className="display-small text-white mb-8">
            "Our mission is to create a more sustainable, connected, and
            enjoyable way for people to move through their cities. Every bike we
            build brings us one step closer to that vision."
          </p>
          <p className="body-large text-white text-opacity-90">
            — The Cowboy Team
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;