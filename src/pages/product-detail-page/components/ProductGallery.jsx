import React, { useState } from "react";
import Image from "components/AppImage";

const ProductGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden mb-4">
        <Image
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`h-20 rounded-md overflow-hidden border-2 transition-all ${
              activeImage === index
                ? "border-primary" :"border-transparent hover:border-gray-200"
            }`}
            onClick={() => setActiveImage(index)}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;