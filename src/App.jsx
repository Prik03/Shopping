// App.js
import React, { useEffect, useState } from "react";
import { CartProvider, useCart } from "./context/CartContext";
import Header from "./Components/Header";
import ProductGrid from "./Components/ProductGrid";
import Filters from "./Components/Filters";
import CartDrawer from "./Components/CartDrawer";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import price from "./price";
import CartButton from "./Components/CartButton";
import SearchBar from "./Components/SearchBar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartDrawer, setCartDrawer] = useState();
  const { addToCart } = useCart();
  const [isLoading, setisLoading] = useState(true);
  const [query, setQuery] = useState("");

  const handleClass = () => {
    setCartDrawer(
      "fixed h-full right-0 top-0 w-full sm:w-1/3 bg-white shadow-lg p-4 overflow-y-auto scrollbar-hide transition-transform"
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setisLoading(true);
        const result = await axios.get("https://dummyjson.com/products");

        const updatedCartItems = result.data.products?.map((item) => ({
          ...item,
          quantity: 1,
          // price: parseInt(item.price),
        }));

        setProducts(updatedCartItems);
        setisLoading(false);
        setFilteredProducts(updatedCartItems);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    if (category) {
      const filtered = products.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };
  const handlePriceChange = (priceRange) => {
    if (priceRange) {
      const filtered = products.filter((product) => {
        return (
          product.price >= priceRange.minPrice &&
          (priceRange.maxPrice === null || product.price <= priceRange.maxPrice)
        );
      });

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <div>
      <Header
        onSearch={handleSearch}
        handleClass={handleClass}
        cartbutton={<CartButton handleClass={handleClass} />}
        search={<SearchBar handleSearch={handleSearch} query={query} />}
      />
      <Filters
        price={price}
        onFilterChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
      />

      <ProductGrid
        loading={isLoading}
        products={filteredProducts}
        onAddToCart={addToCart}
      />

      <CartDrawer cartd={cartDrawer} setCartDrawer={setCartDrawer} />
    </div>
  );
};

const AppWrapper = () => (
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);

export default AppWrapper;
