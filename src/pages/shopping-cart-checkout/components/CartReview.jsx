import React from "react";
import { motion } from "framer-motion";
import Image from "components/AppImage";
import Icon from "components/AppIcon";

const CartReview = ({ cartItems, updateQuantity, removeItem, onContinue }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <h2 className="heading-2 mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <div className="mb-4 flex justify-center">
            <Icon name="ShoppingCart" size={48} className="text-gray-300" />
          </div>
          <h3 className="heading-3 mb-2">Your cart is empty</h3>
          <p className="body text-gray-500 mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <a
            href="/collection-category-page" className="btn-primary inline-block"
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          <div className="space-y-6 mb-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-6"
              >
                <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="heading-3 mb-1">{item.name}</h3>
                  <p className="body-small text-gray-500 mb-2">
                    {item.variant}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="px-3 py-1 text-gray-500 hover:text-primary focus:outline-none" aria-label="Decrease quantity"
                      >
                        <Icon name="Minus" size={16} />
                      </button>
                      <span className="px-3 py-1 text-center w-10">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 text-gray-500 hover:text-primary focus:outline-none" aria-label="Increase quantity"
                      >
                        <Icon name="Plus" size={16} />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="heading-3">${item.price}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400 hover:text-error mt-4 sm:mt-0 sm:ml-4 focus:outline-none" aria-label="Remove item"
                >
                  <Icon name="Trash2" size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between mb-8">
            <a
              href="/collection-category-page" className="flex items-center text-primary hover:underline"
            >
              <Icon name="ArrowLeft" size={16} className="mr-1" />
              Continue Shopping
            </a>
            <button
              onClick={onContinue}
              className="btn-primary flex items-center"
            >
              Proceed to Checkout
              <Icon name="ArrowRight" size={16} className="ml-1" />
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CartReview;