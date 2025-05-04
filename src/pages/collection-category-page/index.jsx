import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CollectionHero from "./components/CollectionHero";
import FilterBar from "./components/FilterBar";
import ProductGrid from "./components/ProductGrid";
import ComparisonSection from "./components/ComparisonSection";
import TestimonialBanner from "./components/TestimonialBanner";

const CollectionCategoryPage = () => {
  const { scrollYProgress } = useScroll();
  const [viewMode, setViewMode] = useState("grid");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Mock product data
  const productData = [
    {
      id: 1,
      name: "Cruiser ST",
      description: "The perfect city commuter with step-through frame",
      price: "$2,990",
      image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "cruiser",
      features: ["Step-through Frame", "70km Range", "Integrated Lights"],
      isNew: true,
    },
    {
      id: 2,
      name: "Cruiser",
      description: "Classic design with modern technology",
      price: "$2,790",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "cruiser",
      features: ["Diamond Frame", "70km Range", "Theft Detection"],
      isNew: false,
    },
    {
      id: 3,
      name: "Sport",
      description: "Performance-focused for the urban adventurer",
      price: "$3,290",
      image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=3122&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "sport",
      features: ["Lightweight Frame", "80km Range", "Enhanced Motor"],
      isNew: true,
    },
    {
      id: 4,
      name: "Cruiser Midnight",
      description: "Limited edition with premium finishes",
      price: "$3,190",
      image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "limited",
      features: ["Matte Black Finish", "70km Range", "Premium Saddle"],
      isNew: false,
    },
    {
      id: 5,
      name: "Sport GT",
      description: "Our most advanced e-bike for demanding riders",
      price: "$3,590",
      image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "sport",
      features: ["Carbon Components", "90km Range", "Advanced Suspension"],
      isNew: true,
    },
    {
      id: 6,
      name: "Cruiser Heritage",
      description: "Vintage-inspired design with modern capabilities",
      price: "$2,990",
      image: "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "limited",
      features: ["Leather Accents", "70km Range", "Retro Styling"],
      isNew: false,
    },
  ];

  useEffect(() => {
    // Set page title
    document.title = "E-Bike Collection | Cowboy";
    
    // Initialize products
    setProducts(productData);
  }, []);

  useEffect(() => {
    // Filter products
    let result = [...products];
    
    if (activeFilter !== "all") {
      result = result.filter(product => product.category === activeFilter);
    }
    
    // Sort products
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => 
          parseFloat(a.price.replace("$", "").replace(",", "")) - 
          parseFloat(b.price.replace("$", "").replace(",", ""))
        );
        break;
      case "price-high":
        result.sort((a, b) => 
          parseFloat(b.price.replace("$", "").replace(",", "")) - 
          parseFloat(a.price.replace("$", "").replace(",", ""))
        );
        break;
      case "newest":
        result.sort((a, b) => (b.isNew === a.isNew) ? 0 : b.isNew ? 1 : -1);
        break;
      case "popular":
        // In a real app, this would use actual popularity data
        // For now, we'll just use a random sort as a placeholder
        result.sort(() => Math.random() - 0.5);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, activeFilter, sortBy]);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const handleSortChange = (sortValue) => {
    setSortBy(sortValue);
  };

  const handleViewChange = (view) => {
    setViewMode(view);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <CollectionHero />

        {/* Filter Bar */}
        <FilterBar 
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          onViewChange={handleViewChange}
          viewMode={viewMode}
        />

        {/* Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex justify-between items-center">
              <h2 className="heading-2">
                {activeFilter === "all" ?"All Models" : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1) +" Models"}
              </h2>
              <p className="text-gray-500">{filteredProducts.length} products</p>
            </div>
            
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} viewMode={viewMode} />
            ) : (
              <div className="text-center py-16">
                <h3 className="heading-3 mb-4">No products found</h3>
                <p className="body text-gray-500 mb-8">
                  Try adjusting your filter or browse all our models.
                </p>
                <button 
                  className="btn-primary" onClick={() => setActiveFilter("all")}
                >
                  View All Models
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Testimonial Banner */}
        <TestimonialBanner />

        {/* Comparison Section */}
        <ComparisonSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CollectionCategoryPage;