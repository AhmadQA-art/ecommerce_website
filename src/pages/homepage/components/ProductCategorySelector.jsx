import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image from "components/AppImage";

const ProductCategorySelector = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 1,
      name: "Cruiser ST",
      image:
        "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The perfect city commuter with step-through frame",
      price: "$2,990",
      color: "Midnight Black",
    },
    {
      id: 2,
      name: "Cruiser",
      image:
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Classic design with modern technology",
      price: "$2,790",
      color: "Desert Sand",
    },
    {
      id: 3,
      name: "Sport",
      image:
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Performance-focused for the urban adventurer",
      price: "$3,290",
      color: "Electric Blue",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-1 mb-4">Discover Our E-Bikes</h2>
          <p className="body-large text-gray-500 max-w-2xl mx-auto">
            Engineered for the urban landscape, our bikes combine cutting-edge
            technology with timeless design.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            {categories.map((category, index) => (
              <button
                key={category.id}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeCategory === index
                    ? "bg-primary text-white" :"text-gray-800 hover:text-primary"
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <motion.div
            key={categories[activeCategory].id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src={categories[activeCategory].image}
              alt={categories[activeCategory].name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            key={`info-${categories[activeCategory].id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <h3 className="heading-1 mb-4">{categories[activeCategory].name}</h3>
            <p className="body-large text-gray-500 mb-6">
              {categories[activeCategory].description}
            </p>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <span className="label text-gray-500 mr-4">COLOR</span>
                <span className="body">{categories[activeCategory].color}</span>
              </div>
              <div className="flex items-center">
                <span className="label text-gray-500 mr-4">PRICE</span>
                <span className="heading-3">{categories[activeCategory].price}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/product-detail-page" className="btn-primary py-3 px-8 rounded-md inline-flex items-center justify-center"
              >
                Explore Details
              </Link>
              <Link
                to="/test-ride-demo-booking" className="btn-secondary py-3 px-8 rounded-md inline-flex items-center justify-center"
              >
                Book a Test Ride
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySelector;