import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import Header from "./Header";
import { FiPlus, FiMinus } from "react-icons/fi";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    calculateTotal,
    decreaseQuantity,
    increaseQuantity,
  } = useCart();

  return (
    <>
      {" "}
      <Header />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>
          <p className="text-gray-500 mb-4">{cartItems.length} items in cart</p>

          {cartItems?.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src={item.images}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <span className="flex items-center bg-whitesmoke-100 mt-2 shadow rounded w-fit">
                    <FiMinus onClick={() => decreaseQuantity(item.id)} />
                    {item.quantity}

                    <FiPlus onClick={() => increaseQuantity(item.id)} />
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-semibold">
                  {" "}
                  ${item.TotalPrice ? item.TotalPrice : item.price}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <MdDeleteOutline className="text-2xl" />
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">Subtotal</span>
              <span className="text-lg font-semibold">${calculateTotal()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-lg font-semibold">Tax</span>
              <span className="text-lg font-semibold">$0.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-lg font-semibold">Shipping</span>
              <span className="text-lg font-semibold">$10.00</span>
            </div>
            <div className="flex justify-between text-xl font-semibold">
              <span>Total</span>
              <span>${calculateTotal() + 10}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900">
              Checkout
            </button>
            <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300">
              <Link to="/"> Continue Shopping</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
