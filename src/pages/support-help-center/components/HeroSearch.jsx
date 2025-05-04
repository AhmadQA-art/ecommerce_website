import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const HeroSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, this would trigger a search
    console.log("Searching for:", searchQuery);
  };

  return (
    <section className="pt-32 pb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="heading-1 mb-6">How can we help you?</h1>
          <p className="body-large text-gray-500 mb-8">
            Find answers to your questions about our products, services, and more.
          </p>

          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text" placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-4 pl-12 pr-4 rounded-lg border border-gray-200 focus:ring-primary focus:ring-2 focus:outline-none shadow-sm"
                aria-label="Search for help topics"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                <Icon name="Search" size={20} />
              </div>
              <button
                type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all"
              >
                Search
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSearch;