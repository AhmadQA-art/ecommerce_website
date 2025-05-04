import React from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const BookingSteps = () => {
  const steps = [
    {
      icon: "MapPin",
      title: "Choose Location",
      description: "Select from our network of test centers across the country",
    },
    {
      icon: "Calendar",
      title: "Pick a Date & Time",
      description: "Find a slot that works with your schedule",
    },
    {
      icon: "UserCheck",
      title: "Your Details",
      description: "Tell us a bit about yourself to complete the booking",
    },
    {
      icon: "CheckCircle",
      title: "Confirmation",
      description: "Receive instant confirmation and add to your calendar",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-1 mb-4">How It Works</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            Booking a test ride is simple and takes just a few minutes. Follow these steps to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="relative mb-6">
                <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name={step.icon} size={28} className="text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="heading-3 mb-3">{step.title}</h3>
              <p className="body text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;