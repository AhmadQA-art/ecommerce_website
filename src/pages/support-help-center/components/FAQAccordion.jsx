import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "components/AppIcon";

const FAQAccordion = ({ faqs, category }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12" id={category.id}>
      <h3 className="heading-2 mb-6">{category.title}</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${category.id}-${index}`}
            >
              <span className="font-medium">{faq.question}</span>
              <Icon
                name={openIndex === index ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="text-primary transition-transform"
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  id={`faq-content-${category.id}-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 border-t border-gray-200 bg-gray-50">
                    <p className="text-gray-700">{faq.answer}</p>
                    {faq.videoUrl && (
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Video Tutorial</h4>
                        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                          <iframe
                            src={faq.videoUrl}
                            title={faq.question}
                            allowFullScreen
                            className="w-full h-full"
                          ></iframe>
                        </div>
                      </div>
                    )}
                    {faq.downloadUrl && (
                      <div className="mt-4">
                        <a
                          href={faq.downloadUrl}
                          className="inline-flex items-center text-primary hover:underline"
                          download
                        >
                          <Icon name="Download" size={16} className="mr-2" />
                          Download Guide
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;