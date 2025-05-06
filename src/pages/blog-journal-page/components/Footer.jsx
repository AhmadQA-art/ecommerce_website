import React from "react";
import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/homepage" className="inline-block mb-6">
              <div className="font-display font-bold text-2xl tracking-tight text-primary">
                COWBOY
              </div>
            </Link>
            <p className="body text-gray-500 mb-6">
              Redefining urban mobility with premium electric bikes that combine
              smart technology, elegant design, and exceptional performance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Instagram"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter"
              >
                <Icon name="Twitter" size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Facebook"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="YouTube"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="heading-3 mb-6">Products</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/collection-category-page" className="text-gray-500 hover:text-primary transition-colors"
                >
                  E-Bikes
                </Link>
              </li>
              <li>
                <Link
                  to="/product-detail-page" className="text-gray-500 hover:text-primary transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link
                  to="/product-detail-page" className="text-gray-500 hover:text-primary transition-colors"
                >
                  Apparel
                </Link>
              </li>
              <li>
                <Link
                  to="/product-detail-page" className="text-gray-500 hover:text-primary transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="heading-3 mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about-brand-story-page" className="text-gray-500 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog-journal-page" className="text-gray-500 hover:text-primary transition-colors"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  to="/about-brand-story-page" className="text-gray-500 hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/about-brand-story-page" className="text-gray-500 hover:text-primary transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="heading-3 mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/support-help-center" className="text-gray-500 hover:text-primary transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/support-help-center" className="text-gray-500 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/test-ride-demo-booking" className="text-gray-500 hover:text-primary transition-colors"
                >
                  Book a Test Ride
                </Link>
              </li>
              <li>
                <Link
                  to="/support-help-center" className="text-gray-500 hover:text-primary transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} Cowboy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <Link
                to="/support-help-center" className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/support-help-center" className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/support-help-center" className="hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                to="/support-help-center" className="hover:text-primary transition-colors"
              >
                Warranty
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
