import React from "react";
import { motion } from "framer-motion";

const ProgressIndicator = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Cart Review" },
    { id: 2, name: "Shipping" },
    { id: 3, name: "Payment" },
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step.id <= currentStep
                    ? "border-primary bg-primary text-white" :"border-gray-300 text-gray-500"
                }`}
              >
                {step.id < currentStep ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </motion.div>
                ) : (
                  step.id
                )}
              </div>
              <span
                className={`mt-2 text-sm font-medium ${
                  step.id <= currentStep ? "text-primary" : "text-gray-500"
                }`}
              >
                {step.name}
              </span>
            </div>

            {/* Connector Line (except after last step) */}
            {index < steps.length - 1 && (
              <div className="w-full flex-1 mx-2">
                <div className="h-1 relative max-w-full rounded-full overflow-hidden bg-gray-200">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{
                      width:
                        currentStep > index + 1
                          ? "100%"
                          : currentStep === index + 1
                          ? "50%" :"0%",
                    }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-primary"
                  ></motion.div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;