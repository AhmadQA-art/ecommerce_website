import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const ShippingForm = ({ onContinue, onBack, shippingInfo, setShippingInfo }) => {
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName": case"lastName":
        if (!value.trim()) error = "This field is required";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Please enter a valid email";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (!/^\+?[0-9]{10,15}$/.test(value.replace(/\s/g, ""))) {
          error = "Please enter a valid phone number";
        }
        break;
      case "address":
        if (!value.trim()) error = "Address is required";
        break;
      case "city":
        if (!value.trim()) error = "City is required";
        break;
      case "postalCode":
        if (!value.trim()) {
          error = "Postal code is required";
        } else if (!/^[0-9a-zA-Z\s]{3,10}$/.test(value)) {
          error = "Please enter a valid postal code";
        }
        break;
      case "country":
        if (!value) error = "Please select a country";
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
    
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    let hasErrors = false;
    
    Object.entries(shippingInfo).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        newErrors[key] = error;
        hasErrors = true;
      }
    });
    
    setErrors(newErrors);
    
    if (!hasErrors) {
      onContinue();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <h2 className="heading-2 mb-6">Shipping Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block body-small font-medium text-gray-700 mb-1">
              First Name *
            </label>
            <input
              type="text" id="firstName" name="firstName"
              value={shippingInfo.firstName}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                errors.firstName ? "border-error" : "border-gray-300"
              }`}
            />
            {errors.firstName && (
              <p className="mt-1 body-small text-error">{errors.firstName}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block body-small font-medium text-gray-700 mb-1">
              Last Name *
            </label>
            <input
              type="text" id="lastName" name="lastName"
              value={shippingInfo.lastName}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                errors.lastName ? "border-error" : "border-gray-300"
              }`}
            />
            {errors.lastName && (
              <p className="mt-1 body-small text-error">{errors.lastName}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block body-small font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email" id="email" name="email"
            value={shippingInfo.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
              errors.email ? "border-error" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="mt-1 body-small text-error">{errors.email}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="phone" className="block body-small font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel" id="phone" name="phone"
            value={shippingInfo.phone}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
              errors.phone ? "border-error" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="mt-1 body-small text-error">{errors.phone}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="address" className="block body-small font-medium text-gray-700 mb-1">
            Address *
          </label>
          <input
            type="text" id="address" name="address"
            value={shippingInfo.address}
            onChange={handleChange}
            className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
              errors.address ? "border-error" : "border-gray-300"
            }`}
          />
          {errors.address && (
            <p className="mt-1 body-small text-error">{errors.address}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="city" className="block body-small font-medium text-gray-700 mb-1">
              City *
            </label>
            <input
              type="text" id="city" name="city"
              value={shippingInfo.city}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                errors.city ? "border-error" : "border-gray-300"
              }`}
            />
            {errors.city && (
              <p className="mt-1 body-small text-error">{errors.city}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="postalCode" className="block body-small font-medium text-gray-700 mb-1">
              Postal Code *
            </label>
            <input
              type="text" id="postalCode" name="postalCode"
              value={shippingInfo.postalCode}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                errors.postalCode ? "border-error" : "border-gray-300"
              }`}
            />
            {errors.postalCode && (
              <p className="mt-1 body-small text-error">{errors.postalCode}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="country" className="block body-small font-medium text-gray-700 mb-1">
              Country *
            </label>
            <select
              id="country" name="country"
              value={shippingInfo.country}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                errors.country ? "border-error" : "border-gray-300"
              }`}
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="DE">Germany</option>
              <option value="FR">France</option>
              <option value="ES">Spain</option>
              <option value="IT">Italy</option>
              <option value="NL">Netherlands</option>
              <option value="BE">Belgium</option>
            </select>
            {errors.country && (
              <p className="mt-1 body-small text-error">{errors.country}</p>
            )}
          </div>
        </div>
        
        <div>
          <label htmlFor="notes" className="block body-small font-medium text-gray-700 mb-1">
            Order Notes (Optional)
          </label>
          <textarea
            id="notes" name="notes" rows="3"
            value={shippingInfo.notes}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-primary focus:ring-2 focus:outline-none" placeholder="Special instructions for delivery"
          ></textarea>
        </div>
        
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="btn-secondary flex items-center"
          >
            <Icon name="ArrowLeft" size={16} className="mr-1" />
            Back to Cart
          </button>
          <button
            type="submit" className="btn-primary flex items-center"
          >
            Continue to Payment
            <Icon name="ArrowRight" size={16} className="ml-1" />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ShippingForm;