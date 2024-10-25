// Header.js
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/E-commerce.png";
import { Link } from "react-router-dom";

const Header = ({ onSearch, cartbutton }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white overflow-auto sticky top-0">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-10" alt="Flowbite Logo" />
      </Link>
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
      {cartbutton}
    </header>
  );
};

export default Header;
