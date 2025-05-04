import React from "react";
import { Link } from "react-router-dom";
import Icon from "components/AppIcon";

const SupportSidebar = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h3 className="heading-3 mb-6">Help Topics</h3>
      <nav>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                to={`#${category.id}`}
                className={`flex items-center py-2 px-3 rounded-md transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white" :"text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <Icon
                  name={category.icon}
                  size={18}
                  className="mr-3"
                />
                {category.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SupportSidebar;