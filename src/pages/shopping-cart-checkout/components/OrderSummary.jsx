import React from "react";
import { motion } from "framer-motion";
import Image from "components/AppImage";

const OrderSummary = ({ cartItems, subtotal, shipping, tax, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gray-50 rounded-lg p-6"
    >
      <h3 className="heading-3 mb-6">Order Summary</h3>
      
      <div className="max-h-80 overflow-y-auto mb-6 pr-2">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mb-4 pb-4 border-b border-gray-200 last:border-0 last:pb-0 last:mb-0">
            <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden mr-4">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="body font-medium">{item.name}</h4>
              <p className="body-small text-gray-500">{item.variant}</p>
              <div className="flex justify-between items-center mt-1">
                <span className="body-small">Qty: {item.quantity}</span>
                <span className="body font-medium">${item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 border-t border-gray-200 pt-4">
        <div className="flex justify-between">
          <span className="body text-gray-500">Subtotal</span>
          <span className="body font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="body text-gray-500">Shipping</span>
          <span className="body font-medium">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="body text-gray-500">Tax</span>
          <span className="body font-medium">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-3 border-t border-gray-200">
          <span className="heading-3">Total</span>
          <span className="heading-3">${total.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <span className="body font-medium">Estimated Delivery</span>
          <span className="body">3-5 business days</span>
        </div>
        <div className="bg-primary bg-opacity-5 p-4 rounded-md">
          <p className="body-small text-primary">
            Free shipping on all orders over $100
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;