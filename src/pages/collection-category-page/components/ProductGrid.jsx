import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, viewMode }) => {
  return (
    <div className={`
      ${viewMode === 'grid' ?'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' :'flex flex-col gap-8'
      }
    `}>
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          viewMode={viewMode}
        />
      ))}
    </div>
  );
};

export default ProductGrid;