import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Icon from "components/AppIcon";
import Image from "components/AppImage";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "London, UK",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "My Cowboy e-bike has completely transformed my daily commute. I arrive at work energized and without breaking a sweat. The battery life is impressive, and the app connectivity makes tracking my rides so easy.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Berlin, Germany",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "After researching numerous e-bikes, I chose Cowboy for its sleek design and smart features. The integrated lights and theft detection give me peace of mind, and the ride quality is exceptional.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      quote:
        "I\'ve owned my Cowboy for over a year now, and it still feels like new. The customer service has been outstanding, and the over-the-air updates keep adding new features. Best investment I\'ve made in years!",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">What Our Riders Say</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            Join thousands of satisfied riders who have made the switch to
            Cowboy e-bikes and transformed their urban mobility.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 relative">
            <div className="absolute top-8 right-8 text-primary">
              <Icon name="Quote" size={48} className="opacity-20" />
            </div>

            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                <div className="flex items-center mb-8">
                  <div className="mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="heading-3">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <p className="body-large mb-8 italic">{testimonial.quote}</p>

                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className={
                        i < testimonial.rating
                          ? "text-warning" :"text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-all ${
                    activeIndex === index
                      ? "bg-primary scale-125" :"bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;