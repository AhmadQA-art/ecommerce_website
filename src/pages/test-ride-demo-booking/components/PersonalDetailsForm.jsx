import React, { useState } from "react";

import { useForm } from "react-hook-form";
import Icon from "components/AppIcon";

const PersonalDetailsForm = ({ onDetailsSubmit, previousDetails }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: previousDetails || {}
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      onDetailsSubmit(data);
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="heading-2 mb-6">Your Details</h3>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name*
            </label>
            <input
              id="firstName" type="text"
              className={`w-full px-4 py-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                errors.firstName ? "border-error" : "border-gray-200"
              }`}
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-error">{errors.firstName.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name*
            </label>
            <input
              id="lastName" type="text"
              className={`w-full px-4 py-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                errors.lastName ? "border-error" : "border-gray-200"
              }`}
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-error">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address*
          </label>
          <input
            id="email" type="email"
            className={`w-full px-4 py-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
              errors.email ? "border-error" : "border-gray-200"
            }`}
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error">{errors.email.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number*
          </label>
          <input
            id="phone" type="tel"
            className={`w-full px-4 py-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
              errors.phone ? "border-error" : "border-gray-200"
            }`}
            {...register("phone", { 
              required: "Phone number is required",
              pattern: {
                value: /^[0-9+-\s()]{10,15}$/,
                message: "Please enter a valid phone number"
              }
            })}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-error">{errors.phone.message}</p>
          )}
        </div>
        
        <div className="mb-8">
          <label htmlFor="bikeModel" className="block text-sm font-medium text-gray-700 mb-1">
            Which bike model are you interested in?
          </label>
          <select
            id="bikeModel" className="w-full px-4 py-3 border border-gray-200 rounded-md focus:ring-primary focus:ring-2 focus:outline-none" {...register("bikeModel")}
          >
            <option value="">Select a model (optional)</option>
            <option value="cruiser-st">Cruiser ST</option>
            <option value="cruiser">Cruiser</option>
            <option value="sport">Sport</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>
        
        <div className="mb-8">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="marketing" type="checkbox" className="w-4 h-4 border border-gray-300 rounded focus:ring-primary focus:ring-2 focus:outline-none" {...register("marketing")}
              />
            </div>
            <div className="ml-3">
              <label htmlFor="marketing" className="text-sm text-gray-500">
                I agree to receive marketing communications from Cowboy about products, services, and events.
              </label>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms" type="checkbox"
                className={`w-4 h-4 border rounded focus:ring-primary focus:ring-2 focus:outline-none ${
                  errors.terms ? "border-error" : "border-gray-300"
                }`}
                {...register("terms", { required: "You must accept the terms and conditions" })}
              />
            </div>
            <div className="ml-3">
              <label htmlFor="terms" className={`text-sm ${errors.terms ? "text-error" : "text-gray-500"}`}>
                I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.*
              </label>
              {errors.terms && (
                <p className="mt-1 text-sm text-error">{errors.terms.message}</p>
              )}
            </div>
          </div>
        </div>
        
        <button
          type="submit" className="btn-primary w-full py-3 flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Icon name="Loader" size={20} className="animate-spin mr-2" />
              Processing...
            </>
          ) : (
            "Complete Booking"
          )}
        </button>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;