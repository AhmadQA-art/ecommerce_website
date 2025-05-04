import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "components/AppIcon";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does a test ride last?",
      answer: "Our standard test rides last approximately 30 minutes. This gives you enough time to get comfortable with the bike, test its features, and ask any questions you might have. If you need more time, just let our staff know during your session."
    },
    {
      question: "What happens if it rains on the day of my test ride?",
      answer: "Test rides take place rain or shine, as our bikes are designed to handle all weather conditions. However, in case of severe weather (thunderstorms, high winds), we may contact you to reschedule for safety reasons. We recommend dressing appropriately for the weather on the day of your test ride."
    },
    {
      question: "Do I need to bring anything to my test ride appointment?",
      answer: "Yes, please bring a valid ID (driver\'s license, passport, or government ID) and wear comfortable clothing suitable for cycling. If you have specific cycling shoes or a helmet you prefer, feel free to bring those as well, though we do provide helmets if needed."
    },
    {
      question: "Can I bring a friend or family member to my test ride?",
      answer: "Absolutely! We encourage you to bring along anyone who might be interested or whose opinion you value. If they\'d like to test ride a bike as well, we recommend booking separate appointments to ensure we have enough bikes available."
    },
    {
      question: "How do I reschedule or cancel my test ride?",
      answer: "You can reschedule or cancel your test ride up to 24 hours before your appointment through the confirmation email we sent you. For last-minute changes, please contact our customer service team directly at support@cowboy.com or call the test center location."
    },
    {
      question: "Will there be someone to guide me through the features of the bike?",
      answer: "Yes, one of our knowledgeable team members will give you a complete overview of the bike\'s features, adjust it to your height, and answer any questions before you set off. They\'ll also be available after your ride to discuss your experience and answer any additional questions."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">Frequently Asked Questions</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            Everything you need to know about test riding a Cowboy e-bike.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-gray-200 py-6"
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="heading-3">{faq.question}</h3>
                <Icon
                  name={openIndex === index ? "ChevronUp" : "ChevronDown"}
                  size={24}
                  className="text-primary flex-shrink-0 ml-4"
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="body text-gray-500 mt-4">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;