import React from "react";

import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const ConfirmationStep = ({ bookingData }) => {
  const formatDate = (dateObj) => {
    if (!dateObj || !dateObj.date) return "";
    
    return dateObj.date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateObj) => {
    if (!dateObj || !dateObj.time) return "";
    return dateObj.time.time;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-success bg-opacity-10 rounded-full mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="heading-2 mb-2">Your Test Ride is Confirmed!</h3>
        <p className="body-large text-gray-500">
          We're excited to have you experience the Cowboy difference.
        </p>
      </div>
      
      <div className="border-t border-b border-gray-200 py-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="label text-gray-500 mb-2">LOCATION</h4>
            <p className="font-medium">{bookingData.location?.name}</p>
            <p className="text-sm text-gray-500">{bookingData.location?.address}</p>
          </div>
          
          <div>
            <h4 className="label text-gray-500 mb-2">DATE & TIME</h4>
            <p className="font-medium">{formatDate(bookingData.dateTime)}</p>
            <p className="text-sm text-gray-500">{formatTime(bookingData.dateTime)}</p>
          </div>
          
          <div>
            <h4 className="label text-gray-500 mb-2">REFERENCE</h4>
            <p className="font-medium">TR-{Math.floor(100000 + Math.random() * 900000)}</p>
            <p className="text-sm text-gray-500">Confirmation sent to your email</p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h4 className="heading-3 mb-4">What to Bring</h4>
        <ul className="space-y-3">
          <li className="flex items-start">
            <Icon name="CreditCard" size={20} className="text-primary mr-3 mt-0.5" />
            <span>A valid ID (driver's license, passport, or government ID)</span>
          </li>
          <li className="flex items-start">
            <Icon name="Smartphone" size={20} className="text-primary mr-3 mt-0.5" />
            <span>Your smartphone (to download our app if you'd like)</span>
          </li>
          <li className="flex items-start">
            <Icon name="Umbrella" size={20} className="text-primary mr-3 mt-0.5" />
            <span>Weather-appropriate clothing (we ride rain or shine!)</span>
          </li>
          <li className="flex items-start">
            <Icon name="HelpCircle" size={20} className="text-primary mr-3 mt-0.5" />
            <span>Any questions you have about e-bikes or Cowboy</span>
          </li>
        </ul>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button className="btn-primary flex items-center justify-center">
          <Icon name="Calendar" size={20} className="mr-2" />
          Add to Calendar
        </button>
        <button className="btn-secondary flex items-center justify-center">
          <Icon name="MapPin" size={20} className="mr-2" />
          Get Directions
        </button>
      </div>
      
      <div className="text-center">
        <Link to="/homepage" className="btn-text inline-flex items-center">
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationStep;