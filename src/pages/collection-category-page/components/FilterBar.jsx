import React, { useState } from "react";
import Icon from "components/AppIcon";

const FilterBar = ({ onFilterChange, onSortChange, onViewChange, viewMode }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const filters = [
    { id: "all", label: "All Models" },
    { id: "cruiser", label: "Cruiser" },
    { id: "sport", label: "Sport" },
    { id: "limited", label: "Limited Edition" },
  ];
  
  const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "popular", label: "Most Popular" },
  ];

  return (
    <div className="bg-white sticky top-20 z-40 py-4 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Filter Button (Mobile) */}
          <button 
            className="md:hidden flex items-center gap-2 text-primary"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Icon name="SlidersHorizontal" size={20} />
            <span>Filter & Sort</span>
            <Icon name={isFilterOpen ? "ChevronUp" : "ChevronDown"} size={16} />
          </button>
          
          {/* Filters (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {filters.map(filter => (
              <button
                key={filter.id}
                className="text-gray-500 hover:text-primary transition-colors"
                onClick={() => onFilterChange(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Right Side Controls */}
          <div className="hidden md:flex items-center gap-6">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-gray-500">Sort by:</label>
              <select 
                id="sort" className="border-none focus:ring-0 text-primary bg-transparent"
                onChange={(e) => onSortChange(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                className={`p-1 ${viewMode === 'grid' ? 'text-primary' : 'text-gray-400'}`}
                onClick={() => onViewChange('grid')}
                aria-label="Grid view"
              >
                <Icon name="Grid" size={20} />
              </button>
              <button
                className={`p-1 ${viewMode === 'list' ? 'text-primary' : 'text-gray-400'}`}
                onClick={() => onViewChange('list')}
                aria-label="List view"
              >
                <Icon name="List" size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Expanded Filters */}
        {isFilterOpen && (
          <div className="md:hidden mt-4 pb-2 border-b border-gray-200">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="label mb-2">Category</p>
                <div className="flex flex-col gap-2">
                  {filters.map(filter => (
                    <button
                      key={filter.id}
                      className="text-left text-gray-500 hover:text-primary transition-colors"
                      onClick={() => {
                        onFilterChange(filter.id);
                        setIsFilterOpen(false);
                      }}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="label mb-2">Sort By</p>
                <div className="flex flex-col gap-2">
                  {sortOptions.map(option => (
                    <button
                      key={option.value}
                      className="text-left text-gray-500 hover:text-primary transition-colors"
                      onClick={() => {
                        onSortChange(option.value);
                        setIsFilterOpen(false);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">View as:</p>
              <div className="flex items-center gap-2">
                <button
                  className={`p-1 ${viewMode === 'grid' ? 'text-primary' : 'text-gray-400'}`}
                  onClick={() => {
                    onViewChange('grid');
                    setIsFilterOpen(false);
                  }}
                  aria-label="Grid view"
                >
                  <Icon name="Grid" size={20} />
                </button>
                <button
                  className={`p-1 ${viewMode === 'list' ? 'text-primary' : 'text-gray-400'}`}
                  onClick={() => {
                    onViewChange('list');
                    setIsFilterOpen(false);
                  }}
                  aria-label="List view"
                >
                  <Icon name="List" size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;