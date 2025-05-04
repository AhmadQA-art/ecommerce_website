import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const PaymentForm = ({ onComplete, onBack, paymentInfo, setPaymentInfo }) => {
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState(paymentInfo.method || "credit-card");

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "cardNumber":
        if (!value.trim()) {
          error = "Card number is required";
        } else if (!/^\d{16}$/.test(value.replace(/\s/g, ""))) {
          error = "Please enter a valid 16-digit card number";
        }
        break;
      case "cardName":
        if (!value.trim()) error = "Cardholder name is required";
        break;
      case "expiryDate":
        if (!value.trim()) {
          error = "Expiry date is required";
        } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
          error = "Please use MM/YY format";
        }
        break;
      case "cvv":
        if (!value.trim()) {
          error = "CVV is required";
        } else if (!/^\d{3,4}$/.test(value)) {
          error = "Please enter a valid CVV";
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      setPaymentInfo({ ...paymentInfo, [name]: formatted });
    } 
    // Format expiry date
    else if (name === "expiryDate") {
      let formatted = value.replace(/\D/g, "");
      if (formatted.length > 2) {
        formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
      }
      setPaymentInfo({ ...paymentInfo, [name]: formatted });
    } else {
      setPaymentInfo({ ...paymentInfo, [name]: value });
    }
    
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setPaymentInfo({ ...paymentInfo, method });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (paymentMethod === "credit-card") {
      // Validate all credit card fields
      const fieldsToValidate = ["cardNumber", "cardName", "expiryDate", "cvv"];
      const newErrors = {};
      let hasErrors = false;
      
      fieldsToValidate.forEach((field) => {
        const error = validateField(field, paymentInfo[field] || "");
        if (error) {
          newErrors[field] = error;
          hasErrors = true;
        }
      });
      
      setErrors(newErrors);
      
      if (hasErrors) {
        return;
      }
    }
    
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <h2 className="heading-2 mb-6">Payment Method</h2>
      
      <div className="mb-8">
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            type="button" onClick={() => handlePaymentMethodChange("credit-card")}
            className={`flex items-center justify-center p-4 border rounded-md w-full sm:w-auto sm:flex-1 transition-all ${
              paymentMethod === "credit-card" ?"border-primary bg-primary bg-opacity-5" :"border-gray-300 hover:border-primary"
            }`}
          >
            <Icon name="CreditCard" size={24} className="mr-2" />
            <span>Credit Card</span>
          </button>
          
          <button
            type="button" onClick={() => handlePaymentMethodChange("paypal")}
            className={`flex items-center justify-center p-4 border rounded-md w-full sm:w-auto sm:flex-1 transition-all ${
              paymentMethod === "paypal" ?"border-primary bg-primary bg-opacity-5" :"border-gray-300 hover:border-primary"
            }`}
          >
            <Icon name="Wallet" size={24} className="mr-2" />
            <span>PayPal</span>
          </button>
          
          <button
            type="button" onClick={() => handlePaymentMethodChange("apple-pay")}
            className={`flex items-center justify-center p-4 border rounded-md w-full sm:w-auto sm:flex-1 transition-all ${
              paymentMethod === "apple-pay" ?"border-primary bg-primary bg-opacity-5" :"border-gray-300 hover:border-primary"
            }`}
          >
            <Icon name="Smartphone" size={24} className="mr-2" />
            <span>Apple Pay</span>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {paymentMethod === "credit-card" && (
            <>
              <div>
                <label htmlFor="cardNumber" className="block body-small font-medium text-gray-700 mb-1">
                  Card Number *
                </label>
                <div className="relative">
                  <input
                    type="text" id="cardNumber" name="cardNumber" value={paymentInfo.cardNumber ||""}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className={`w-full p-3 pl-10 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                      errors.cardNumber ? "border-error" : "border-gray-300"
                    }`}
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Icon name="CreditCard" size={18} className="text-gray-400" />
                  </div>
                </div>
                {errors.cardNumber && (
                  <p className="mt-1 body-small text-error">{errors.cardNumber}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="cardName" className="block body-small font-medium text-gray-700 mb-1">
                  Cardholder Name *
                </label>
                <input
                  type="text" id="cardName" name="cardName" value={paymentInfo.cardName ||""}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                    errors.cardName ? "border-error" : "border-gray-300"
                  }`}
                />
                {errors.cardName && (
                  <p className="mt-1 body-small text-error">{errors.cardName}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="expiryDate" className="block body-small font-medium text-gray-700 mb-1">
                    Expiry Date *
                  </label>
                  <input
                    type="text" id="expiryDate" name="expiryDate" value={paymentInfo.expiryDate ||""}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                      errors.expiryDate ? "border-error" : "border-gray-300"
                    }`}
                  />
                  {errors.expiryDate && (
                    <p className="mt-1 body-small text-error">{errors.expiryDate}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block body-small font-medium text-gray-700 mb-1">
                    CVV *
                  </label>
                  <div className="relative">
                    <input
                      type="text" id="cvv" name="cvv" value={paymentInfo.cvv ||""}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength={4}
                      className={`w-full p-3 border rounded-md focus:ring-primary focus:ring-2 focus:outline-none ${
                        errors.cvv ? "border-error" : "border-gray-300"
                      }`}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <button
                        type="button" className="text-gray-400 hover:text-gray-500 focus:outline-none" aria-label="CVV information"
                      >
                        <Icon name="HelpCircle" size={16} />
                      </button>
                    </div>
                  </div>
                  {errors.cvv && (
                    <p className="mt-1 body-small text-error">{errors.cvv}</p>
                  )}
                </div>
              </div>
            </>
          )}
          
          {paymentMethod === "paypal" && (
            <div className="bg-gray-50 p-6 rounded-md text-center">
              <Icon name="Wallet" size={48} className="mx-auto mb-4 text-primary" />
              <p className="body mb-4">
                You will be redirected to PayPal to complete your payment securely.
              </p>
            </div>
          )}
          
          {paymentMethod === "apple-pay" && (
            <div className="bg-gray-50 p-6 rounded-md text-center">
              <Icon name="Smartphone" size={48} className="mx-auto mb-4 text-primary" />
              <p className="body mb-4">
                You will be prompted to confirm payment with Apple Pay.
              </p>
            </div>
          )}
          
          <div className="pt-4">
            <div className="flex items-center mb-6">
              <input
                id="savePaymentInfo" name="savePaymentInfo" type="checkbox"
                checked={paymentInfo.saveInfo}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, saveInfo: e.target.checked })}
                className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <label htmlFor="savePaymentInfo" className="ml-2 block body text-gray-700">
                Save payment information for future purchases
              </label>
            </div>
            
            <div className="flex justify-between">
              <button
                type="button"
                onClick={onBack}
                className="btn-secondary flex items-center"
              >
                <Icon name="ArrowLeft" size={16} className="mr-1" />
                Back to Shipping
              </button>
              <button
                type="submit" className="btn-primary flex items-center"
              >
                Complete Order
                <Icon name="Check" size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default PaymentForm;