// Header.js
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/E-commerce.png";
import { Link } from "react-router-dom";

const Header = ({ onSearch, handleClass }) => {
  const [query, setQuery] = useState("");
  const { cartItems } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link to="\" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} class="h-10" alt="Flowbite Logo" />
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

      <button
        type="button"
        onClick={() => handleClass()}
        class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FaCartPlus />
        <span className="sr-only">Cart</span>
        {cartItems.length ? (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {cartItems.length}
          </div>
        ) : null}
      </button>
    </header>
  );
};

export default Header;
