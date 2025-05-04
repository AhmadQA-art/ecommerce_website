import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const OrderConfirmation = ({ orderNumber, shippingInfo, paymentInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full text-center"
    >
      <div className="mb-8">
        <div className="w-20 h-20 bg-success bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={40} className="text-success" />
        </div>
        <h2 className="heading-1 mb-2">Thank You for Your Order!</h2>
        <p className="body-large text-gray-500 mb-4">
          Your order has been received and is being processed.
        </p>
        <p className="body font-medium">
          Order Number: <span className="text-primary">{orderNumber}</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="heading-3 mb-4">Shipping Information</h3>
          <p className="body mb-1">
            {shippingInfo.firstName} {shippingInfo.lastName}
          </p>
          <p className="body mb-1">{shippingInfo.address}</p>
          <p className="body mb-1">
            {shippingInfo.city}, {shippingInfo.postalCode}
          </p>
          <p className="body mb-4">{shippingInfo.country}</p>
          <p className="body-small text-gray-500">
            <span className="font-medium">Email:</span> {shippingInfo.email}
          </p>
          <p className="body-small text-gray-500">
            <span className="font-medium">Phone:</span> {shippingInfo.phone}
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="heading-3 mb-4">Payment Information</h3>
          {paymentInfo.method === "credit-card" ? (
            <>
              <p className="body mb-1">
                <span className="font-medium">Card:</span> •••• •••• •••• {paymentInfo.cardNumber.slice(-4)}
              </p>
              <p className="body mb-1">
                <span className="font-medium">Name:</span> {paymentInfo.cardName}
              </p>
              <p className="body mb-4">
                <span className="font-medium">Expiry:</span> {paymentInfo.expiryDate}
              </p>
            </>
          ) : (
            <p className="body mb-4">
              <span className="font-medium">Method:</span> {paymentInfo.method === "paypal" ? "PayPal" : "Apple Pay"}
            </p>
          )}
          <p className="body-small text-gray-500">
            A receipt has been sent to your email address.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/homepage" className="btn-secondary flex items-center justify-center">
          <Icon name="Home" size={16} className="mr-1" />
          Return to Home
        </Link>
        <Link to="/collection-category-page" className="btn-primary flex items-center justify-center">
          <Icon name="ShoppingBag" size={16} className="mr-1" />
          Continue Shopping
        </Link>
      </div>
    </motion.div>
  );
};

export default OrderConfirmation;