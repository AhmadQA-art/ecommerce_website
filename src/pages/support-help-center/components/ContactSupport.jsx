import React from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const ContactSupport = () => {
  const contactMethods = [
    {
      id: 1,
      title: "Live Chat",
      description: "Chat with our support team in real-time.",
      icon: "MessageSquare",
      availability: "Available 9AM-6PM CET, Mon-Fri",
      action: "Start Chat",
      link: "#chat",
    },
    {
      id: 2,
      title: "Email Support",
      description: "Send us an email and we\'ll get back to you.",
      icon: "Mail",
      availability: "Response within 24 hours",
      action: "Send Email",
      link: "mailto:support@cowboy.com",
    },
    {
      id: 3,
      title: "Phone Support",
      description: "Speak directly with our support team.",
      icon: "Phone",
      availability: "Available 9AM-5PM CET, Mon-Fri",
      action: "Call Now",
      link: "tel:+123456789",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">Still Need Help?</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            Our support team is here to assist you with any questions or issues
            you may have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm p-6 flex flex-col"
            >
              <div className="bg-primary bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon
                  name={method.icon}
                  size={24}
                  className="text-primary"
                />
              </div>
              <h3 className="heading-3 mb-2">{method.title}</h3>
              <p className="text-gray-500 mb-4">{method.description}</p>
              <p className="text-sm text-gray-500 mb-6">{method.availability}</p>
              <a
                href={method.link}
                className="btn-primary mt-auto self-start"
              >
                {method.action}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;