import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductSpecifications from "./components/ProductSpecifications";
import RelatedProducts from "./components/RelatedProducts";
import CustomerReviews from "./components/CustomerReviews";
import StickyAddToCart from "./components/StickyAddToCart";
import AccessorySelector from "./components/AccessorySelector";
import Icon from "components/AppIcon";

const ProductDetailPage = () => {
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [showStickyCart, setShowStickyCart] = useState(false);

  // Mock product data
  const product = {
    id: "cowboy-4-st",
    name: "Cowboy 4 ST",
    price: "$2,990",
    description: "The Cowboy 4 ST features a step-through frame for easy mounting and dismounting, making it perfect for urban riders of all heights. With integrated lights, a removable battery, and smart connectivity, it\'s the ultimate city commuter.",
    rating: 4.8,
    reviewCount: 246,
    colors: [
      { name: "Midnight Black", hex: "#000000" },
      { name: "Desert Sand", hex: "#D2B48C" },
      { name: "Anthracite Grey", hex: "#36454F" },
    ],
    images: [
      { 
        src: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        alt: "Cowboy 4 ST - Front View" 
      },
      { 
        src: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        alt: "Cowboy 4 ST - Side View" 
      },
      { 
        src: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        alt: "Cowboy 4 ST - Detail View" 
      },
      { 
        src: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        alt: "Cowboy 4 ST - Rear View" 
      },
      { 
        src: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        alt: "Cowboy 4 ST - Close-up" 
      },
    ],
  };

  // Mock specifications data
  const specifications = {
    "General": [
      { name: "Frame", value: "Aluminum 6061" },
      { name: "Weight", value: "18.9 kg" },
      { name: "Range", value: "Up to 70 km" },
      { name: "Charging Time", value: "3.5 hours" },
      { name: "Max Speed", value: "25 km/h (EU) / 20 mph (US)" },
    ],
    "Electrical": [
      { name: "Battery", value: "Removable 360Wh" },
      { name: "Motor", value: "250W rear hub motor" },
      { name: "Torque", value: "45 Nm" },
      { name: "Connectivity", value: "Bluetooth, 4G (optional)" },
      { name: "App Compatibility", value: "iOS, Android" },
    ],
    "features": [
      { 
        name: "Integrated Lights", 
        icon: "Sun", 
        description: "Front and rear lights integrated into the frame for maximum visibility" 
      },
      { 
        name: "Theft Detection", 
        icon: "Shield", 
        description: "Built-in sensors and GPS tracking to protect your bike" 
      },
      { 
        name: "Crash Detection", 
        icon: "AlertTriangle", 
        description: "Automatic detection of accidents with emergency contact notification" 
      },
      { 
        name: "Wireless Charging", 
        icon: "Battery", 
        description: "Phone mount with wireless charging for your smartphone" 
      },
      { 
        name: "Over-the-air Updates", 
        icon: "RefreshCw", 
        description: "Regular software updates to improve performance and add features" 
      },
    ]
  };

  // Mock accessories data
  const accessories = [
    {
      id: 1,
      name: "Quad Lock Phone Mount",
      description: "Securely attach your smartphone to your bike",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1617704548623-340376564e68?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Mudguards Set",
      description: "Keep clean in all weather conditions",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Rear Luggage Rack",
      description: "Add carrying capacity to your e-bike",
      price: "$99.99",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Mock related products data
  const relatedProducts = [
    {
      id: 1,
      name: "Cowboy 4",
      category: "E-Bike",
      price: "$2,790",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Cowboy Sport",
      category: "E-Bike",
      price: "$3,290",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Cycling Backpack",
      category: "Accessory",
      price: "$129.99",
      image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Cycling Helmet",
      category: "Accessory",
      price: "$149.99",
      image: "https://images.unsplash.com/photo-1557687647-b4a785f24795?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "March 15, 2023",
      rating: 5,
      title: "Best purchase I\'ve made in years",
      content: "I\'ve been commuting with my Cowboy 4 ST for 6 months now and it has completely transformed my daily routine. The battery life is impressive, and I love the integrated app features. The step-through frame makes it so easy to hop on and off in city traffic.",
      helpfulCount: 24,
      images: [
        "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "February 28, 2023",
      rating: 4,
      title: "Great bike with minor issues",
      content: "The Cowboy 4 ST is a fantastic e-bike overall. The design is sleek and the ride is smooth. My only complaint is that the app occasionally disconnects during rides. Customer service has been responsive about the issue though.",
      helpfulCount: 12,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      date: "January 10, 2023",
      rating: 5,
      title: "Perfect city commuter",
      content: "After researching dozens of e-bikes, I chose the Cowboy 4 ST and couldn\'t be happier. The step-through design is perfect for city riding with frequent stops. The battery range is exactly as advertised, and the integrated lights are bright enough for night riding.",
      helpfulCount: 31,
      images: [
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 4,
      name: "David Wilson",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      date: "December 5, 2022",
      rating: 3,
      title: "Good bike but expensive accessories",
      content: "The bike itself is excellent, but I was disappointed by how expensive the official accessories are. The mudguards should really be included at this price point. Also, the charging time is a bit longer than advertised in my experience.",
      helpfulCount: 18,
    },
    {
      id: 5,
      name: "Olivia Kim",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      date: "November 22, 2022",
      rating: 5,
      title: "Exceeded my expectations",
      content: "I was hesitant to spend this much on an e-bike, but the Cowboy 4 ST has exceeded all my expectations. The build quality is exceptional, and the ride feels natural and responsive. The theft detection feature gives me peace of mind when parking in the city.",
      helpfulCount: 27,
    },
  ];

  const handleAddToCart = (product, color, quantity) => {
    console.log("Added to cart:", product.name, color, quantity);
    // Here you would typically dispatch to a cart state manager
    alert(`${product.name} added to cart!`);
  };

  const handleAccessorySelect = (accessories) => {
    setSelectedAccessories(accessories);
  };

  useEffect(() => {
    // Set page title
    document.title = `${product.name} | Cowboy E-Bikes`;

    // Show sticky add to cart when scrolling down
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCart(true);
      } else {
        setShowStickyCart(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [product.name]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/homepage" className="hover:text-primary">
              Home
            </Link>
            <Icon name="ChevronRight" size={16} className="mx-2" />
            <Link to="/collection-category-page" className="hover:text-primary">
              E-Bikes
            </Link>
            <Icon name="ChevronRight" size={16} className="mx-2" />
            <span className="text-gray-800">{product.name}</span>
          </div>
        </div>

        {/* Product Overview Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Product Gallery */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ProductGallery images={product.images} />
              </motion.div>

              {/* Right Column - Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ProductInfo 
                  product={product} 
                  onAddToCart={handleAddToCart} 
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specifications and Accessories Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Specifications - Takes up 2/3 of the width on large screens */}
              <div className="lg:col-span-2">
                <ProductSpecifications specifications={specifications} />
              </div>

              {/* Accessories Selector - Takes up 1/3 of the width on large screens */}
              <div>
                <AccessorySelector 
                  accessories={accessories} 
                  onSelect={handleAccessorySelect} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="heading-1 mb-12 text-center">Why Choose Cowboy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <h3 className="heading-3 mb-3">Powerful Assistance</h3>
                <p className="text-gray-500">
                  Our intelligent motor provides smooth, responsive power exactly when you need it.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Smartphone" size={32} className="text-primary" />
                </div>
                <h3 className="heading-3 mb-3">Smart Connectivity</h3>
                <p className="text-gray-500">
                  Connect your bike to our app for navigation, theft detection, and ride statistics.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Battery" size={32} className="text-primary" />
                </div>
                <h3 className="heading-3 mb-3">Long-lasting Battery</h3>
                <p className="text-gray-500">
                  Up to 70km range on a single charge, perfect for daily commutes and weekend adventures.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <CustomerReviews 
          reviews={reviews} 
          averageRating={4.8} 
          totalReviews={246} 
        />

        {/* Related Products Section */}
        <RelatedProducts products={relatedProducts} />

        {/* Sticky Add to Cart */}
        {showStickyCart && (
          <StickyAddToCart 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductDetailPage;