import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const HelpCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Getting Started",
      icon: "Compass",
      description: "New to Cowboy? Learn the basics here.",
      link: "#getting-started",
    },
    {
      id: 2,
      title: "Troubleshooting",
      icon: "Wrench",
      description: "Solutions for common issues.",
      link: "#troubleshooting",
    },
    {
      id: 3,
      title: "Maintenance",
      icon: "Tool",
      description: "Keep your bike in top condition.",
      link: "#maintenance",
    },
    {
      id: 4,
      title: "App & Connectivity",
      icon: "Smartphone",
      description: "Get the most out of the Cowboy app.",
      link: "#app-connectivity",
    },
    {
      id: 5,
      title: "Orders & Shipping",
      icon: "Package",
      description: "Information about your purchase.",
      link: "#orders-shipping",
    },
    {
      id: 6,
      title: "Warranty & Returns",
      icon: "Shield",
      description: "Understand our policies.",
      link: "#warranty-returns",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="heading-2 text-center mb-12">Browse Help Topics</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-gray-100 rounded-lg p-6 hover:shadow-md transition-all"
            >
              <Link to={category.link} className="block h-full">
                <div className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Icon
                      name={category.icon}
                      size={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="heading-3 mb-2">{category.title}</h3>
                    <p className="text-gray-500">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HelpCategories;