import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const ProductInfo = ({ product, onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Product Title and Price */}
      <h1 className="heading-1 mb-2">{product.name}</h1>
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-4">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              name="Star"
              size={18}
              className={i < product.rating ? "text-warning" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="text-gray-500">
          {product.reviewCount} reviews
        </span>
      </div>
      <p className="heading-2 mb-6">{product.price}</p>

      {/* Product Description */}
      <p className="body text-gray-500 mb-8">{product.description}</p>

      {/* Color Selection */}
      <div className="mb-8">
        <h3 className="label text-gray-800 mb-3">COLOR</h3>
        <div className="flex space-x-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              className={`w-12 h-12 rounded-full border-2 transition-all ${
                selectedColor.name === color.name
                  ? "border-primary" :"border-transparent"
              }`}
              style={{ backgroundColor: color.hex }}
              onClick={() => setSelectedColor(color)}
              aria-label={`Select ${color.name} color`}
            >
              {selectedColor.name === color.name && (
                <Icon
                  name="Check"
                  size={16}
                  className="text-white mx-auto"
                />
              )}
            </button>
          ))}
        </div>
        <p className="body-small text-gray-500 mt-2">
          Selected: {selectedColor.name}
        </p>
      </div>

      {/* Quantity Selector */}
      <div className="mb-8">
        <h3 className="label text-gray-800 mb-3">QUANTITY</h3>
        <div className="flex items-center border border-gray-200 rounded-md w-32">
          <button
            className="px-3 py-2 text-gray-500 hover:text-primary"
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            <Icon name="Minus" size={16} />
          </button>
          <input
            type="number" className="w-full text-center border-0 focus:ring-0"
            value={quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
            min="1" max="10"
          />
          <button
            className="px-3 py-2 text-gray-500 hover:text-primary"
            onClick={() => handleQuantityChange(quantity + 1)}
            disabled={quantity >= 10}
            aria-label="Increase quantity"
          >
            <Icon name="Plus" size={16} />
          </button>
        </div>
      </div>

      {/* Add to Cart and Wishlist */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          className="btn-primary py-3 px-8 flex items-center justify-center"
          onClick={() => onAddToCart(product, selectedColor, quantity)}
        >
          <Icon name="ShoppingCart" size={20} className="mr-2" />
          Add to Cart
        </button>
        <Link
          to="/test-ride-demo-booking" className="btn-secondary py-3 px-8 flex items-center justify-center"
        >
          <Icon name="CalendarCheck" size={20} className="mr-2" />
          Book a Test Ride
        </Link>
      </div>

      {/* Delivery Info */}
      <div className="bg-gray-100 p-4 rounded-md mb-8">
        <div className="flex items-start mb-3">
          <Icon name="Truck" size={20} className="text-primary mr-3 mt-1" />
          <div>
            <p className="body font-medium">Free Shipping</p>
            <p className="body-small text-gray-500">
              Delivery estimated in 3-5 business days
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Icon name="RefreshCw" size={20} className="text-primary mr-3 mt-1" />
          <div>
            <p className="body font-medium">30-Day Returns</p>
            <p className="body-small text-gray-500">
              Shop with confidence with our hassle-free return policy
            </p>
          </div>
        </div>
      </div>

      {/* Share */}
      <div className="flex items-center">
        <span className="label text-gray-800 mr-4">SHARE</span>
        <div className="flex space-x-3">
          <a
            href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Share on Facebook"
          >
            <Icon name="Facebook" size={18} />
          </a>
          <a
            href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Share on Twitter"
          >
            <Icon name="Twitter" size={18} />
          </a>
          <a
            href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Share on Instagram"
          >
            <Icon name="Instagram" size={18} />
          </a>
          <a
            href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Share via Email"
          >
            <Icon name="Mail" size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;