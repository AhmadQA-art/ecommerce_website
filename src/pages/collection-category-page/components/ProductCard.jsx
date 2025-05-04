import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image from "components/AppImage";
import Icon from "components/AppIcon";

const ProductCard = ({ product, viewMode }) => {
  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      >
        <Link to={`/product-detail-page?id=${product.id}`} className="flex flex-col md:flex-row">
          <div className="md:w-1/3 relative overflow-hidden group">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {product.isNew && (
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                NEW
              </div>
            )}
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h3 className="heading-2 mb-2">{product.name}</h3>
              <p className="body text-gray-500 mb-4">{product.description}</p>
              <div className="flex flex-wrap gap-3 mb-4">
                {product.features.map((feature, index) => (
                  <span key={index} className="inline-flex items-center bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="heading-3">{product.price}</p>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" aria-label="Add to wishlist">
                  <Icon name="Heart" size={20} />
                </button>
                <button className="btn-primary py-2 px-4 flex items-center gap-2">
                  <Icon name="Eye" size={18} />
                  <span>Quick View</span>
                </button>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
    >
      <Link to={`/product-detail-page?id=${product.id}`} className="block h-full">
        <div className="relative overflow-hidden group">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              NEW
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
            <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
              <button className="p-2 rounded-full bg-white text-primary hover:bg-gray-100 transition-colors" aria-label="Quick view">
                <Icon name="Eye" size={20} />
              </button>
              <button className="p-2 rounded-full bg-white text-primary hover:bg-gray-100 transition-colors" aria-label="Add to wishlist">
                <Icon name="Heart" size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="heading-3 mb-2">{product.name}</h3>
          <p className="body text-gray-500 mb-4">{product.description}</p>
          <p className="heading-3">{product.price}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;