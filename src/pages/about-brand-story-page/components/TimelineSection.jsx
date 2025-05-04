import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "components/AppImage";

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2017",
      title: "The Beginning",
      description:
        "Cowboy was founded in Brussels with a mission to improve urban mobility by creating the most elegant and efficient electric bikes.",
      image:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      year: "2018",
      title: "First Model Launch",
      description:
        "The first Cowboy bike was launched to critical acclaim, winning the Eurobike Award for its innovative design and technology integration.",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      year: "2020",
      title: "European Expansion",
      description:
        "Cowboy expanded across Europe, bringing our vision of urban mobility to cities like Berlin, Paris, London, and Amsterdam.",
      image:
        "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      year: "2022",
      title: "North American Launch",
      description:
        "Cowboy crossed the Atlantic to bring our electric bikes to North American cities, starting with New York, San Francisco, and Seattle.",
      image:
        "https://images.unsplash.com/photo-1582516961442-0f4c330666ee?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="label text-primary mb-4 block">OUR JOURNEY</span>
          <h2 className="heading-1 mb-6">The Cowboy Timeline</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            From a small startup in Brussels to a global mobility brand, our
            journey has been defined by innovation, perseverance, and a
            commitment to excellence.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => {
            const [ref, inView] = useInView({
              threshold: 0.2,
              triggerOnce: true,
            });

            return (
              <TimelineEvent
                key={event.year}
                event={event}
                index={index}
                inView={inView}
                reference={ref}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TimelineEvent = ({ event, index, inView, reference }) => {
  const isEven = index % 2 === 0;

  const variants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div
      ref={reference}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Year Marker (Mobile Only) */}
      <div className="md:hidden flex items-center mb-4">
        <div className="bg-primary text-white px-4 py-2 rounded-full">
          {event.year}
        </div>
        <div className="h-0.5 flex-grow bg-gray-200 ml-4"></div>
      </div>

      {/* Content Side */}
      <motion.div
        className={`${isEven ? "md:text-right md:pr-16" : "md:pl-16"}`}
        variants={variants}
        initial="hidden" animate={inView ?"visible" : "hidden"}
      >
        {/* Year Marker (Desktop Only) */}
        <div className="hidden md:block">
          <div
            className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center`}
          >
            {event.year}
          </div>
        </div>

        <h3 className="heading-2 mb-4">{event.title}</h3>
        <p className="body text-gray-500 mb-6">{event.description}</p>
      </motion.div>

      {/* Image Side */}
      <motion.div
        className={`${isEven ? "" : ""}`}
        variants={variants}
        initial="hidden" animate={inView ?"visible" : "hidden"}
      >
        <div className="h-64 md:h-80 rounded-lg overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineSection;