import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "components/AppIcon";

const DesignPhilosophySection = () => {
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

  const principles = [
    {
      icon: "Minimize2",
      title: "Minimalist Design",
      description:
        "We believe in removing the unnecessary to focus on what truly matters: a seamless riding experience.",
    },
    {
      icon: "Zap",
      title: "Intelligent Integration",
      description:
        "Technology should enhance the experience without being intrusive, seamlessly blending into the overall design.",
    },
    {
      icon: "Shield",
      title: "Built to Last",
      description:
        "We create products that are durable, reliable, and designed to withstand the rigors of daily use.",
    },
    {
      icon: "Leaf",
      title: "Sustainable Materials",
      description:
        "Our commitment to the environment is reflected in our choice of materials and manufacturing processes.",
    },
  ];

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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="label text-primary mb-4 block">DESIGN PHILOSOPHY</span>
          <h2 className="heading-1 mb-6">Crafted with Purpose</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            Our design philosophy is guided by a set of principles that inform
            every decision we make, from the materials we select to the
            technology we integrate.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-100 p-8 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Icon
                  name={principle.icon}
                  size={28}
                  className="text-primary"
                />
              </div>
              <h3 className="heading-3 mb-3">{principle.title}</h3>
              <p className="body text-gray-500">{principle.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DesignPhilosophySection;