import React from "react";
import { Link } from "react-router-dom";
import Image from "components/AppImage";
import Icon from "components/AppIcon";

const RelatedProducts = ({ products }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="heading-1 mb-8">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link to="/product-detail-page" className="block">
                <div className="mb-4 rounded-lg overflow-hidden h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="heading-3 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 mb-2">{product.category}</p>
                <p className="font-medium">{product.price}</p>
              </Link>
              <div className="mt-4 flex space-x-2">
                <button className="btn-primary py-2 px-4 flex-1 flex items-center justify-center">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className="btn-secondary py-2 px-3 flex items-center justify-center">
                  <Icon name="Heart" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;