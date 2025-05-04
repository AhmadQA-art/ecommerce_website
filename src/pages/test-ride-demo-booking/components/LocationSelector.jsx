import React, { useState } from "react";
import { motion } from "framer-motion";
import Icon from "components/AppIcon";

const LocationSelector = ({ onLocationSelect, selectedLocation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const locations = [
    {
      id: 1,
      name: "Downtown Flagship Store",
      address: "123 Main Street, New York, NY 10001",
      distance: "1.2 miles away",
      lat: 40.7128,
      lng: -74.0060,
      availability: "High",
    },
    {
      id: 2,
      name: "Brooklyn Experience Center",
      address: "456 Atlantic Avenue, Brooklyn, NY 11217",
      distance: "3.5 miles away",
      lat: 40.6782,
      lng: -73.9442,
      availability: "Medium",
    },
    {
      id: 3,
      name: "Queens Retail Partner",
      address: "789 Queens Blvd, Queens, NY 11375",
      distance: "5.8 miles away",
      lat: 40.7282,
      lng: -73.7949,
      availability: "Low",
    },
    {
      id: 4,
      name: "Hoboken Pop-up Store",
      address: "321 Washington St, Hoboken, NJ 07030",
      distance: "4.3 miles away",
      lat: 40.7439,
      lng: -74.0323,
      availability: "High",
    },
    {
      id: 5,
      name: "Jersey City Partner Shop",
      address: "555 Grove St, Jersey City, NJ 07302",
      distance: "4.7 miles away",
      lat: 40.7178,
      lng: -74.0431,
      availability: "Medium",
    },
  ];

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case "High":
        return "bg-success bg-opacity-20 text-success";
      case "Medium":
        return "bg-warning bg-opacity-20 text-warning";
      case "Low":
        return "bg-error bg-opacity-20 text-error";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="heading-2 mb-6">Select a Location</h3>
      
      <div className="mb-6 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon name="Search" size={20} className="text-gray-500" />
        </div>
        <input
          type="text" placeholder="Search by city, address or zip code" className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-primary focus:ring-2 focus:outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-8 h-64 md:h-80 rounded-lg overflow-hidden">
        <iframe
          width="100%" height="100%" loading="lazy" title="Test Ride Locations" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=40.7128,-74.0060&z=12&output=embed">
        </iframe>
      </div>

      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {filteredLocations.map((location) => (
          <motion.div
            key={location.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-4 border rounded-lg cursor-pointer transition-all hover:border-primary ${
              selectedLocation?.id === location.id
                ? "border-primary bg-primary bg-opacity-5" :"border-gray-200"
            }`}
            onClick={() => onLocationSelect(location)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="heading-3 mb-1">{location.name}</h4>
                <p className="body text-gray-500 mb-2">{location.address}</p>
                <p className="body-small text-gray-500">{location.distance}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(location.availability)}`}>
                {location.availability} Availability
              </span>
            </div>
          </motion.div>
        ))}
        
        {filteredLocations.length === 0 && (
          <div className="text-center py-8">
            <Icon name="MapOff" size={48} className="text-gray-300 mx-auto mb-4" />
            <p className="body text-gray-500">No locations found matching your search.</p>
            <p className="body-small text-gray-500">Try adjusting your search terms or browse all locations.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSelector;