import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              TotalPrice: item.price,
              TotalPrice: (item.quantity + 1) * item.price,
            }
          : item
      )
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              TotalPrice: (item.quantity - 1) * item.price,
            }
          : item
      )
    );
  };

  const addToCart = (product) => {
    const itemExists = cartItems.some((item) => item.id === product.id);
    if (itemExists) {
      console.log("your cart ");
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (sum, item) => sum + (item.TotalPrice || item.price),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        calculateTotal,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
