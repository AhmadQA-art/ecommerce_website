import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "components/AppImage";

const MissionSection = () => {
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={controls}
          >
            <span className="label text-primary mb-4 block">OUR MISSION</span>
            <h2 className="heading-1 mb-6">Transforming Urban Mobility</h2>
            <p className="body-large text-gray-500 mb-6">
              Founded in 2017, Cowboy was born from a simple yet powerful
              vision: to transform urban mobility by creating the most elegant
              and efficient electric bikes on the market.
            </p>
            <p className="body text-gray-500 mb-6">
              Our founders, Adrien Roose, Karim Slaoui, and Tanguy Goretti,
              combined their expertise in technology and design to create a
              product that would not only solve the practical challenges of
              urban transportation but would also inspire people to ride more
              often and further.
            </p>
            <p className="body text-gray-500">
              Today, Cowboy has grown into a community of thousands of riders
              across Europe and North America, all connected by a shared passion
              for smarter, more sustainable mobility.
            </p>
          </motion.div>

          <div className="relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cowboy founders" className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="heading-3 mb-2">2017</p>
              <p className="body">
                The year Cowboy was founded with a vision to revolutionize urban
                mobility
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;