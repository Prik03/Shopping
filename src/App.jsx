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
import ProductCardSkeleton from "./Components/ProductCardSkeleton";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartDrawer, setCartDrawer] = useState();
  const { addToCart } = useCart();
  const [isLoading, setisLoading] = useState(false);

  const handleClass = () => {
    setCartDrawer(
      "fixed h-full right-0 top-0 w-full sm:w-1/3 bg-white shadow-lg p-4  transition-transform"
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await axios.get("https://dummyjson.com/products");
        setisLoading(true);
        setProducts(result.data.products);

        setFilteredProducts(result.data.products); // Initialize filtered products
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await axios.get(
          "https://dummyjson.com/products/category-list"
        );
        setCategories(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
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
      <Header onSearch={handleSearch} handleClass={handleClass} />
      <Filters
        price={price}
        categories={categories}
        onFilterChange={handleCategoryChange} // Pass the filter logic
        onPriceChange={handlePriceChange}
      />

      <ProductGrid
        loading={setisLoading}
        products={filteredProducts}
        onAddToCart={addToCart}
      />

      <CartDrawer cartd={cartDrawer} setCartDrawer={setCartDrawer} />
      {/* Pass a function to close the cart drawer */}
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
