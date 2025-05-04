import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Image from "components/AppImage";

const SustainabilitySection = () => {
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

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
            className="order-2 lg:order-1"
          >
            <span className="label text-primary mb-4 block">SUSTAINABILITY</span>
            <h2 className="heading-1 mb-6">Committed to a Greener Future</h2>
            <p className="body-large text-gray-500 mb-6">
              Our commitment to sustainability goes beyond just creating
              electric bikes. We're dedicated to reducing our carbon footprint
              throughout our entire production process.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-primary bg-opacity-10 rounded-full p-1 mr-3 mt-1">
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
                    />
                  </svg>
                </div>
                <p className="body text-gray-800">
                  Eco-friendly materials sourced from responsible suppliers
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-primary bg-opacity-10 rounded-full p-1 mr-3 mt-1">
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
                    />
                  </svg>
                </div>
                <p className="body text-gray-800">
                  Carbon-neutral shipping and packaging solutions
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-primary bg-opacity-10 rounded-full p-1 mr-3 mt-1">
                  <svg
                    width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"
                    />
                  </svg>
                </div>
                <p className="body text-gray-800">
                  Battery recycling program for end-of-life products
                </p>
              </li>
            </ul>
            <Link
              to="/about-brand-story-page" className="btn-primary inline-flex items-center"
            >
              Learn More About Our Mission
              <svg
                width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sustainable manufacturing" className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="heading-3 mb-2">1.2M+</p>
              <p className="body">
                Kilograms of CO₂ saved by our riders in the last year alone
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;