import React from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const BookingSummary = ({ bookingData, currentStep }) => {
  const formatDate = (dateObj) => {
    if (!dateObj || !dateObj.date) return "Not selected";
    
    return dateObj.date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateObj) => {
    if (!dateObj || !dateObj.time) return "Not selected";
    return dateObj.time.time;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 rounded-lg p-6 sticky top-24"
    >
      <h3 className="heading-3 mb-6">Booking Summary</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-2">
            <Icon name="CheckCircle" size={18} className={`mr-2 ${currentStep >= 1 ? "text-success" : "text-gray-300"}`} />
            <h4 className="font-medium">Location</h4>
          </div>
          {bookingData.location ? (
            <div className="ml-6">
              <p className="font-medium">{bookingData.location.name}</p>
              <p className="text-sm text-gray-500">{bookingData.location.address}</p>
            </div>
          ) : (
            <p className="ml-6 text-sm text-gray-500">Not selected yet</p>
          )}
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <Icon name="CheckCircle" size={18} className={`mr-2 ${currentStep >= 2 ? "text-success" : "text-gray-300"}`} />
            <h4 className="font-medium">Date & Time</h4>
          </div>
          {bookingData.dateTime ? (
            <div className="ml-6">
              <p className="font-medium">{formatDate(bookingData.dateTime)}</p>
              <p className="text-sm text-gray-500">{formatTime(bookingData.dateTime)}</p>
            </div>
          ) : (
            <p className="ml-6 text-sm text-gray-500">Not selected yet</p>
          )}
        </div>
        
        <div>
          <div className="flex items-center mb-2">
            <Icon name="CheckCircle" size={18} className={`mr-2 ${currentStep >= 3 ? "text-success" : "text-gray-300"}`} />
            <h4 className="font-medium">Your Details</h4>
          </div>
          {bookingData.personalDetails ? (
            <div className="ml-6">
              <p className="font-medium">{bookingData.personalDetails.firstName} {bookingData.personalDetails.lastName}</p>
              <p className="text-sm text-gray-500">{bookingData.personalDetails.email}</p>
              <p className="text-sm text-gray-500">{bookingData.personalDetails.phone}</p>
            </div>
          ) : (
            <p className="ml-6 text-sm text-gray-500">Not provided yet</p>
          )}
        </div>
      </div>
      
      {currentStep === 4 && (
        <div className="mt-8 p-4 bg-success bg-opacity-10 rounded-lg">
          <div className="flex items-start">
            <Icon name="CheckCircle" size={24} className="text-success mr-3 mt-0.5" />
            <div>
              <h4 className="font-medium text-success mb-1">Booking Confirmed!</h4>
              <p className="text-sm text-gray-700">
                We've sent a confirmation email to {bookingData.personalDetails?.email}. 
                You can add this appointment to your calendar using the link in the email.
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-8 text-sm text-gray-500">
        <p className="flex items-center mb-2">
          <Icon name="Info" size={16} className="mr-2" />
          Your test ride will last approximately 30 minutes
        </p>
        <p className="flex items-center">
          <Icon name="Calendar" size={16} className="mr-2" />
          You can reschedule up to 24 hours before your appointment
        </p>
      </div>
    </motion.div>
  );
};

export default BookingSummary;