import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "components/AppIcon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Battery",
      title: "Long-lasting Battery",
      description:
        "Up to 70km range on a single charge, perfect for your daily commute and weekend adventures.",
    },
    {
      icon: "Smartphone",
      title: "Smart Connectivity",
      description:
        "Connect your bike to our app for navigation, theft detection, and ride statistics.",
    },
    {
      icon: "Zap",
      title: "Powerful Motor",
      description:
        "250W motor provides smooth assistance up to 25 km/h, making hills feel flat.",
    },
    {
      icon: "Shield",
      title: "Built-in Security",
      description:
        "GPS tracking, theft alerts, and remote locking keep your bike safe at all times.",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">Engineered for Excellence</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            Every component of our e-bikes is designed with purpose, creating a
            riding experience that's both exhilarating and practical.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Icon
                  name={feature.icon}
                  size={28}
                  className="text-primary"
                />
              </div>
              <h3 className="heading-3 mb-3">{feature.title}</h3>
              <p className="body text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;