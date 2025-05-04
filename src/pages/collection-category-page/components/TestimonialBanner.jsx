import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image from "components/AppImage";

const TestimonialBanner = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="bg-primary bg-opacity-5 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="label text-primary mb-4 block">RIDER STORIES</span>
                  <h2 className="heading-1 mb-6">
                    "My Cowboy changed how I experience the city"
                  </h2>
                  <p className="body-large text-gray-500 mb-8 italic">
                    After years of commuting by car, I switched to a Cowboy e-bike
                    and it transformed my daily routine. I arrive at work energized,
                    save money on fuel, and rediscovered parts of the city I never
                    noticed before.
                  </p>
                  <div className="flex items-center mb-8">
                    <Image
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Sarah Johnson" className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">London, UK</p>
                    </div>
                  </div>
                  <Link
                    to="/test-ride-demo-booking" className="btn-primary inline-block"
                  >
                    Book Your Test Ride
                  </Link>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-96 lg:h-auto"
              >
                <Image
                  src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Cowboy e-bike rider in the city" className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialBanner;