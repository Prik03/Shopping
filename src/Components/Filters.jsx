// Filters.js
import React from "react";

const categories = ["beauty", "fragrances", "furniture", "groceries"];

const Filters = ({ onFilterChange, price, onPriceChange }) => {
  const handleCategorySelect = (e) => {
    onFilterChange(e.target.value);
  };

  const handlePriceSelect = (e) => {
    onPriceChange(JSON.parse(e.target.value));
  };

  return (
    <div className="flex p-4">
      <div className="flex p-2 bg-slate-200 shadow rounded-lg overflow-hidden">
        <select
          onChange={handleCategorySelect}
          className="outline-none bg-transparent"
        >
          <option value="">-Select Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="ml-4 flex p-2 bg-slate-200 shadow rounded-lg overflow-hidden">
        <select
          onChange={handlePriceSelect}
          className="outline-none bg-transparent"
        >
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
