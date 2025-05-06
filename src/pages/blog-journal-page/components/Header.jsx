import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white bg-opacity-90 backdrop-blur-md shadow-sm py-3"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/homepage" className="flex items-center">
          <div className="font-display font-bold text-2xl tracking-tight text-primary">
            COWBOY
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/collection-category-page" 
            className="font-medium transition-all text-primary hover:text-gray-800"
          >
            E-Bikes
          </Link>
          <Link
            to="/product-detail-page" 
            className="font-medium transition-all text-primary hover:text-gray-800"
          >
            Accessories
          </Link>
          <Link
            to="/test-ride-demo-booking" 
            className="font-medium transition-all text-primary hover:text-gray-800"
          >
            Test Rides
          </Link>
          <Link
            to="/about-brand-story-page" 
            className="font-medium transition-all text-primary hover:text-gray-800"
          >
            About
          </Link>
          <Link
            to="/blog-journal-page" 
            className="font-medium transition-all text-primary hover:text-gray-800"
          >
            Journal
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/support-help-center" 
            className="transition-all text-primary hover:text-gray-800" 
            aria-label="Support"
          >
            <Icon name="HelpCircle" size={24} />
          </Link>
          <Link
            to="/shopping-cart-checkout" 
            className="transition-all text-primary hover:text-gray-800" 
            aria-label="Cart"
          >
            <Icon name="ShoppingCart" size={24} />
          </Link>
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/collection-category-page" className="text-primary hover:text-gray-800 font-medium py-2 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              E-Bikes
            </Link>
            <Link
              to="/product-detail-page" className="text-primary hover:text-gray-800 font-medium py-2 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accessories
            </Link>
            <Link
              to="/test-ride-demo-booking" className="text-primary hover:text-gray-800 font-medium py-2 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Test Rides
            </Link>
            <Link
              to="/about-brand-story-page" className="text-primary hover:text-gray-800 font-medium py-2 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/blog-journal-page" className="text-primary hover:text-gray-800 font-medium py-2 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Journal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
