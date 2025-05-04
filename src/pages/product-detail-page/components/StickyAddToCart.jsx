import React from "react";
import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const StickyAddToCart = ({ product, onAddToCart }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-4 px-4 z-40 shadow-lg transform transition-transform duration-300">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 w-16 h-16 rounded-md overflow-hidden hidden sm:block">
            <img
              src={product.images[0].src}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">{product.name}</h3>
            <p className="text-primary font-bold">{product.price}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Link
            to="/test-ride-demo-booking" className="btn-secondary py-2 px-4 hidden md:flex items-center"
          >
            <Icon name="CalendarCheck" size={18} className="mr-2" />
            Book Test Ride
          </Link>
          <button
            className="btn-primary py-2 px-6 flex items-center"
            onClick={() => onAddToCart(product)}
          >
            <Icon name="ShoppingCart" size={18} className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyAddToCart;