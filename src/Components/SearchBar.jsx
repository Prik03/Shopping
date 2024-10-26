import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setQuery, query }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
      <div className="bg-white rounded-lg flex items-center overflow-hidden">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 rounded text-black outline-none"
            placeholder="Search products..."
          />
          <button type="submit" className="p-2 ">
            <FaSearch className="text-lg text-black" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
