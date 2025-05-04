import React, { useState } from "react";
import Icon from "components/AppIcon";

const ProductSpecifications = ({ specifications }) => {
  const [activeTab, setActiveTab] = useState("specs");

  const tabs = [
    { id: "specs", label: "Specifications" },
    { id: "features", label: "Features" },
    { id: "warranty", label: "Warranty" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 py-4 px-4 text-center transition-colors ${
              activeTab === tab.id
                ? "text-primary border-b-2 border-primary" :"text-gray-500 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "specs" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(specifications).map(([category, items]) => (
              <div key={category}>
                <h3 className="heading-3 mb-4">{category}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.name} className="flex justify-between">
                      <span className="text-gray-500">{item.name}</span>
                      <span className="font-medium">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {activeTab === "features" && (
          <div className="space-y-6">
            {specifications.features.map((feature) => (
              <div key={feature.name} className="flex items-start">
                <div className="bg-primary bg-opacity-10 rounded-full p-2 mr-4">
                  <Icon name={feature.icon} size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{feature.name}</h4>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "warranty" && (
          <div className="space-y-4">
            <p className="body">
              Our e-bikes come with a comprehensive warranty package to ensure your peace of mind:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="Check" size={18} className="text-success mr-2 mt-1" />
                <span>2-year warranty on the frame</span>
              </li>
              <li className="flex items-start">
                <Icon name="Check" size={18} className="text-success mr-2 mt-1" />
                <span>2-year warranty on electronic components</span>
              </li>
              <li className="flex items-start">
                <Icon name="Check" size={18} className="text-success mr-2 mt-1" />
                <span>1-year warranty on the battery</span>
              </li>
              <li className="flex items-start">
                <Icon name="Check" size={18} className="text-success mr-2 mt-1" />
                <span>30-day satisfaction guarantee</span>
              </li>
            </ul>
            <p className="body mt-4">
              For full warranty details and terms, please refer to our warranty policy or contact our customer support team.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSpecifications;