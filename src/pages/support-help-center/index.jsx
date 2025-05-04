import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSearch from "./components/HeroSearch";
import HelpCategories from "./components/HelpCategories";
import FAQAccordion from "./components/FAQAccordion";
import SupportSidebar from "./components/SupportSidebar";
import ContactSupport from "./components/ContactSupport";
import RelatedArticles from "./components/RelatedArticles";

const SupportHelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState("getting-started");

  useEffect(() => {
    // Set page title
    document.title = "Support & Help Center | Cowboy";
  }, []);

  // FAQ categories
  const faqCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: "Compass",
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: "Wrench",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      icon: "Tool",
    },
    {
      id: "app-connectivity",
      title: "App & Connectivity",
      icon: "Smartphone",
    },
    {
      id: "orders-shipping",
      title: "Orders & Shipping",
      icon: "Package",
    },
    {
      id: "warranty-returns",
      title: "Warranty & Returns",
      icon: "Shield",
    },
  ];

  // FAQ data
  const faqData = {
    "getting-started": [
      {
        question: "How do I set up my new Cowboy bike?",
        answer: "Your Cowboy bike comes 99% assembled. Simply unfold the handlebar, secure it with the provided Allen key, and adjust the seat height to your preference. Then, download the Cowboy app, create an account, and follow the in-app instructions to pair your bike.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        downloadUrl: "#setup-guide",
      },
      {
        question: "How do I charge my Cowboy bike?",
        answer: "To charge your Cowboy bike, locate the charging port on the bottom of the removable battery. Connect the provided charger to the port, then plug it into a standard wall outlet. A full charge takes approximately 3.5 hours. The LED indicator on the battery will show the charging progress.",
      },
      {
        question: "How do I turn on my Cowboy bike?",
        answer: "Your Cowboy bike turns on automatically when you approach it with your paired smartphone. Alternatively, you can press the power button on the battery once. The LED display will illuminate to indicate the bike is powered on.",
      },
      {
        question: "What\'s the range of my Cowboy bike?",
        answer: "The Cowboy bike has a range of up to 70km (43.5 miles) on a single charge. However, actual range may vary depending on factors such as rider weight, terrain, weather conditions, and riding style.",
      },
    ],
    "troubleshooting": [
      {
        question: "My bike won\'t turn on. What should I do?",
        answer: "First, check if the battery is properly inserted and charged. If the battery is charged but the bike still won\'t turn on, try removing and reinserting the battery. If the issue persists, try resetting the bike by holding the power button for 10 seconds. If none of these solutions work, please contact our support team.",
      },
      {
        question: "The motor assistance isn\'t working properly. How can I fix it?",
        answer: "Ensure that the bike is properly powered on and that the battery has sufficient charge. Check if the motor assistance is enabled in the app settings. If the issue persists, try restarting the bike and the app. If the problem continues, there might be a sensor or controller issue that requires professional assistance.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        question: "My app won\'t connect to my bike. What should I do?",
        answer: "Make sure Bluetooth is enabled on your smartphone and that you\'re within range of your bike. Try closing and reopening the app. If the issue persists, try unpairing and repairing your bike in the app settings. You can also try restarting both your phone and bike.",
      },
    ],
    "maintenance": [
      {
        question: "How often should I service my Cowboy bike?",
        answer: "We recommend a basic service check every 6 months or 1,000 km, whichever comes first. This includes checking brake pads, tire pressure, chain tension, and general bolt tightness. A more comprehensive service is recommended annually or every 2,000 km.",
        downloadUrl: "#maintenance-guide",
      },
      {
        question: "How do I clean my Cowboy bike?",
        answer: "Clean your bike with a damp cloth and mild soap. Avoid using high-pressure water jets as they can damage electronic components. Pay special attention to the chain and gears, which can be cleaned with a specific degreaser. After cleaning, apply a suitable lubricant to the chain.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      },
      {
        question: "How do I maintain the battery life?",
        answer: "To maximize battery life, avoid storing the battery fully charged or completely discharged for long periods. Ideally, store it at around 50-80% charge if not using the bike for several weeks. Keep the battery at room temperature and avoid extreme heat or cold.",
      },
    ],
    "app-connectivity": [
      {
        question: "How do I update the firmware on my bike?",
        answer: "Firmware updates are managed through the Cowboy app. When a new update is available, you\'ll receive a notification in the app. Ensure your bike is charged above 50% before starting the update. Follow the in-app instructions to complete the update process, which typically takes 10-15 minutes.",
      },
      {
        question: "Can I use the Cowboy app without a Cowboy bike?",
        answer: "While you can download and install the Cowboy app without owning a Cowboy bike, most features require connection to a Cowboy bike to function. You can browse basic information about Cowboy bikes and create an account, but features like ride tracking, theft detection, and bike settings require a paired Cowboy bike.",
      },
      {
        question: "How does the theft detection feature work?",
        answer: "The theft detection feature uses motion sensors in your bike to detect unauthorized movement. When activated, if your bike is moved without your phone nearby, you\'ll receive an alert notification. You can then track your bike\'s location in real-time through the app. To activate this feature, enable it in the security settings of the Cowboy app.",
      },
    ],
    "orders-shipping": [
      {
        question: "How long will it take to receive my order?",
        answer: "Standard delivery for Cowboy bikes typically takes 5-10 business days from the order confirmation date. Accessories usually ship within 2-3 business days. Delivery times may vary depending on your location and product availability. You\'ll receive tracking information via email once your order ships.",
      },
      {
        question: "Can I change or cancel my order?",
        answer: "You can change or cancel your order within 24 hours of placing it by contacting our customer service team. After this period, we begin processing orders for shipment and changes may not be possible. For bike orders, a restocking fee may apply for cancellations after the 24-hour window.",
      },
      {
        question: "Do you ship internationally?",
        answer: "Currently, we ship to select countries in Europe including Belgium, Netherlands, Germany, France, UK, Italy, Spain, Austria, and Luxembourg. We\'re continuously expanding our shipping network. For the most up-to-date information on shipping destinations, please check our website or contact customer service.",
      },
    ],
    "warranty-returns": [
      {
        question: "What is covered under the warranty?",
        answer: "Our standard warranty covers manufacturing defects in materials and workmanship for 2 years from the date of purchase. The frame is covered for 8 years, and the battery is covered for 2 years or 500 charge cycles, whichever comes first. Normal wear and tear, improper assembly, or damage from accidents are not covered.",
        downloadUrl: "#warranty-policy",
      },
      {
        question: "How do I return a product?",
        answer: "To initiate a return, contact our customer service within 30 days of receiving your product. For accessories, pack them in their original packaging and use the prepaid return label provided. For bikes, we\'ll arrange a pickup. Once we receive and inspect the returned items, we\'ll process your refund within 10 business days.",
      },
      {
        question: "Can I extend my warranty?",
        answer: "Yes, we offer extended warranty options that can be purchased within 30 days of your bike purchase. The extended warranty adds an additional 1 or 2 years of coverage under the same terms as the standard warranty. You can purchase the extended warranty through your account on our website or by contacting customer service.",
      },
    ],
  };

  // Related articles data
  const relatedArticles = {
    "getting-started": [
      { id: 1, title: "First Ride Guide: Tips for New Riders", link: "#first-ride" },
      { id: 2, title: "Understanding Your Bike\'s Features", link: "#features" },
      { id: 3, title: "Safety Tips for Urban Cycling", link: "#safety" },
    ],
    "troubleshooting": [
      { id: 1, title: "Common Error Codes and Solutions", link: "#error-codes" },
      { id: 2, title: "Battery Troubleshooting Guide", link: "#battery-issues" },
      { id: 3, title: "Diagnosing Unusual Noises", link: "#noises" },
    ],
    "maintenance": [
      { id: 1, title: "Seasonal Maintenance Checklist", link: "#seasonal" },
      { id: 2, title: "Tire Care and Replacement Guide", link: "#tires" },
      { id: 3, title: "Brake Adjustment Tutorial", link: "#brakes" },
    ],
    "app-connectivity": [
      { id: 1, title: "Getting the Most from the Cowboy App", link: "#app-features" },
      { id: 2, title: "Troubleshooting Bluetooth Connectivity", link: "#bluetooth" },
      { id: 3, title: "Using Navigation Features Safely", link: "#navigation" },
    ],
    "orders-shipping": [
      { id: 1, title: "Understanding Shipping Timelines", link: "#shipping" },
      { id: 2, title: "Order Tracking Guide", link: "#tracking" },
      { id: 3, title: "International Shipping FAQ", link: "#international" },
    ],
    "warranty-returns": [
      { id: 1, title: "Warranty Claim Process Explained", link: "#claim-process" },
      { id: 2, title: "Return Shipping Instructions", link: "#return-shipping" },
      { id: 3, title: "Extended Warranty Benefits", link: "#extended" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section with Search */}
        <HeroSearch />

        {/* Help Categories */}
        <HelpCategories />

        {/* FAQ Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <SupportSidebar
                    categories={faqCategories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                  />
                  
                  {/* Related Articles */}
                  <div className="mt-8">
                    <RelatedArticles articles={relatedArticles[activeCategory]} />
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-3">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <FAQAccordion
                    faqs={faqData[activeCategory]}
                    category={faqCategories.find(cat => cat.id === activeCategory)}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <ContactSupport />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SupportHelpCenter;