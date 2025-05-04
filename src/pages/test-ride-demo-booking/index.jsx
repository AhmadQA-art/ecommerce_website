import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Icon from "components/AppIcon";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import BookingSteps from "./components/BookingSteps";
import LocationSelector from "./components/LocationSelector";
import DateTimeSelector from "./components/DateTimeSelector";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import BookingSummary from "./components/BookingSummary";
import ConfirmationStep from "./components/ConfirmationStep";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

const TestRideDemoBooking = () => {
  const { scrollYProgress } = useScroll();
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    location: null,
    dateTime: null,
    personalDetails: null
  });

  useEffect(() => {
    // Set page title
    document.title = "Book a Test Ride | Cowboy E-Bikes";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleLocationSelect = (location) => {
    setBookingData(prev => ({ ...prev, location }));
    if (currentStep === 1) {
      setCurrentStep(2);
      // Smooth scroll to the next section
      setTimeout(() => {
        document.getElementById("step-2").scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleDateTimeSelect = (dateTime) => {
    setBookingData(prev => ({ ...prev, dateTime }));
    if (currentStep === 2) {
      setCurrentStep(3);
      // Smooth scroll to the next section
      setTimeout(() => {
        document.getElementById("step-3").scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleDetailsSubmit = (personalDetails) => {
    setBookingData(prev => ({ ...prev, personalDetails }));
    setCurrentStep(4);
    // Smooth scroll to the confirmation section
    setTimeout(() => {
      document.getElementById("step-4").scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleBackStep = (step) => {
    if (currentStep > step) {
      setCurrentStep(step);
      // Smooth scroll to the selected step
      setTimeout(() => {
        document.getElementById(`step-${step}`).scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <Hero />

        {/* Booking Steps Overview */}
        <BookingSteps />

        {/* Booking Process */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Booking Form Steps */}
              <div className="lg:col-span-2 space-y-8">
                {/* Step 1: Location Selection */}
                <div id="step-1">
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-3">
                      1
                    </div>
                    <h2 className="heading-2">Choose a Location</h2>
                  </div>
                  <LocationSelector 
                    onLocationSelect={handleLocationSelect} 
                    selectedLocation={bookingData.location}
                  />
                </div>

                {/* Step 2: Date & Time Selection */}
                <div id="step-2" className={currentStep >= 2 ? "" : "opacity-50 pointer-events-none"}>
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-3">
                      2
                    </div>
                    <h2 className="heading-2">Select Date & Time</h2>
                    {currentStep > 2 && (
                      <button 
                        className="ml-auto text-primary flex items-center"
                        onClick={() => handleBackStep(2)}
                      >
                        <Icon name="Edit" size={16} className="mr-1" />
                        Edit
                      </button>
                    )}
                  </div>
                  {currentStep >= 2 && (
                    <DateTimeSelector 
                      onDateTimeSelect={handleDateTimeSelect}
                      selectedDateTime={bookingData.dateTime}
                    />
                  )}
                </div>

                {/* Step 3: Personal Details */}
                <div id="step-3" className={currentStep >= 3 ? "" : "opacity-50 pointer-events-none"}>
                  <div className="flex items-center mb-6">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold mr-3">
                      3
                    </div>
                    <h2 className="heading-2">Your Details</h2>
                    {currentStep > 3 && (
                      <button 
                        className="ml-auto text-primary flex items-center"
                        onClick={() => handleBackStep(3)}
                      >
                        <Icon name="Edit" size={16} className="mr-1" />
                        Edit
                      </button>
                    )}
                  </div>
                  {currentStep >= 3 && (
                    <PersonalDetailsForm 
                      onDetailsSubmit={handleDetailsSubmit}
                      previousDetails={bookingData.personalDetails}
                    />
                  )}
                </div>

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <div id="step-4">
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 rounded-full bg-success text-white flex items-center justify-center font-bold mr-3">
                        <Icon name="Check" size={16} />
                      </div>
                      <h2 className="heading-2">Confirmation</h2>
                    </div>
                    <ConfirmationStep bookingData={bookingData} />
                  </div>
                )}
              </div>

              {/* Right Column - Booking Summary */}
              <div className="lg:col-span-1">
                <BookingSummary bookingData={bookingData} currentStep={currentStep} />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TestRideDemoBooking;