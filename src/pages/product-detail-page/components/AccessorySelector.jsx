import React, { useState } from "react";
import Icon from "components/AppIcon";
import Image from "components/AppImage";

const AccessorySelector = ({ accessories, onSelect }) => {
  const [selectedAccessories, setSelectedAccessories] = useState([]);

  const handleToggleAccessory = (accessory) => {
    if (selectedAccessories.some(item => item.id === accessory.id)) {
      setSelectedAccessories(selectedAccessories.filter(item => item.id !== accessory.id));
      onSelect(selectedAccessories.filter(item => item.id !== accessory.id));
    } else {
      setSelectedAccessories([...selectedAccessories, accessory]);
      onSelect([...selectedAccessories, accessory]);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="heading-2 mb-6">Recommended Accessories</h3>
      <div className="space-y-4">
        {accessories.map((accessory) => {
          const isSelected = selectedAccessories.some(item => item.id === accessory.id);
          return (
            <div 
              key={accessory.id} 
              className={`bg-white p-4 rounded-lg border transition-all ${
                isSelected ? "border-primary" : "border-transparent"
              }`}
            >
              <div className="flex items-center">
                <div className="w-20 h-20 rounded-md overflow-hidden mr-4">
                  <Image
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium mb-1">{accessory.name}</h4>
                  <p className="text-gray-500 text-sm mb-2">{accessory.description}</p>
                  <p className="font-bold">{accessory.price}</p>
                </div>
                <button
                  className={`ml-4 w-6 h-6 rounded-full flex items-center justify-center ${
                    isSelected 
                      ? "bg-primary text-white" :"bg-gray-200 text-gray-500"
                  }`}
                  onClick={() => handleToggleAccessory(accessory)}
                  aria-label={isSelected ? "Remove accessory" : "Add accessory"}
                >
                  {isSelected ? (
                    <Icon name="Check" size={14} />
                  ) : (
                    <Icon name="Plus" size={14} />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {selectedAccessories.length > 0 && (
        <div className="mt-6 p-4 bg-primary bg-opacity-10 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Selected Accessories</h4>
            <span className="text-primary font-bold">
              +${selectedAccessories.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2)}
            </span>
          </div>
          <ul className="space-y-2">
            {selectedAccessories.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccessorySelector;