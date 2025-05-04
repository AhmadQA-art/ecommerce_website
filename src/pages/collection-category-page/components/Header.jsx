import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
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
            to="/collection-category-page" className="text-primary hover:text-gray-800 font-medium transition-all"
          >
            E-Bikes
          </Link>
          <Link
            to="/product-detail-page" className="text-primary hover:text-gray-800 font-medium transition-all"
          >
            Accessories
          </Link>
          <Link
            to="/test-ride-demo-booking" className="text-primary hover:text-gray-800 font-medium transition-all"
          >
            Test Rides
          </Link>
          <Link
            to="/about-brand-story-page" className="text-primary hover:text-gray-800 font-medium transition-all"
          >
            About
          </Link>
          <Link
            to="/blog-journal-page" className="text-primary hover:text-gray-800 font-medium transition-all"
          >
            Journal
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/support-help-center" className="text-primary hover:text-gray-800 transition-all" aria-label="Support"
          >
            <Icon name="HelpCircle" size={24} />
          </Link>
          <Link
            to="/shopping-cart-checkout" className="text-primary hover:text-gray-800 transition-all" aria-label="Cart"
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