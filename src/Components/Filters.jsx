// Filters.js
import React from "react";

const Filters = ({ categories, onFilterChange, price, onPriceChange }) => {
  const handleCategorySelect = (e) => {
    onFilterChange(e.target.value);
  };

  const handlePriceSelect = (e) => {
    onPriceChange(JSON.parse(e.target.value)); // Parse the JSON string from the dropdown value
  };

  return (
    <div className="flex p-4">
      <div className="flex p-2 border-2 bg-white-30 border-black rounded-lg overflow-hidden">
        <select
          onChange={handleCategorySelect}
          className="outline-none bg-transparent"
        >
          <option value="">-Select Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="ml-4 flex p-2 border-2 border-black rounded-lg overflow-hidden">
        <select onChange={handlePriceSelect} className="outline-none">
          <option value="">Select Range</option>
          {price.map((price) => (
            <option
              key={price.id}
              value={JSON.stringify({
                minPrice: price.minPrice,
                maxPrice: price.maxPrice,
              })}
            >
              {price.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
