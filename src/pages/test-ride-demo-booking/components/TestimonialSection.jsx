import React from "react";
import { motion } from "framer-motion";
import Image from "components/AppImage";
import Icon from "components/AppIcon";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      location: "London, UK",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      quote: "The test ride completely sold me on the Cowboy. The smooth acceleration and the build quality were beyond my expectations. The staff was knowledgeable and didn\'t pressure me at all.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophia Chen",
      location: "Berlin, Germany",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      quote: "I was hesitant about e-bikes until my test ride. The Cowboy feels natural to ride, not like you\'re on an electric scooter. The booking process was simple and the staff was super helpful.",
      rating: 5,
    },
    {
      id: 3,
      name: "Marcus Johnson",
      location: "Amsterdam, NL",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      quote: "After comparing several e-bikes online, the test ride made the decision easy. The Cowboy\'s power delivery is so smooth, and the design turns heads everywhere. Worth every penny!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">What Test Riders Say</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from people who've experienced
            the Cowboy difference firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="heading-3">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>

              <p className="body mb-6 italic">"{testimonial.quote}"</p>

              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={18}
                    className={
                      i < testimonial.rating
                        ? "text-warning" :"text-gray-300"
                    }
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;