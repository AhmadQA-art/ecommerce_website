import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "components/AppImage";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Adrien Roose",
      role: "Co-Founder & CEO",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "We\'re not just building bikes; we\'re creating a new way for people to experience their cities.",
    },
    {
      name: "Karim Slaoui",
      role: "Co-Founder & COO",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      quote:
        "Our goal is to combine beautiful design with cutting-edge technology to create something truly special.",
    },
    {
      name: "Tanguy Goretti",
      role: "Co-Founder & CTO",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      quote:
        "Technology should enhance the riding experience, not complicate it. That\'s our guiding principle.",
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
    hidden: { opacity: 0, y: 30 },
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
          <span className="label text-primary mb-4 block">OUR TEAM</span>
          <h2 className="heading-1 mb-6">Meet the Founders</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            The visionaries behind Cowboy who combined their expertise in
            technology, design, and business to create a new standard in urban
            mobility.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-100 rounded-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-3 mb-1">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>
                <p className="body italic text-gray-700">"{member.quote}"</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;