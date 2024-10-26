// CartDrawer.js
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { IoIosClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartDrawer = ({ cartd, setCartDrawer }) => {
  const {
    cartItems,
    removeFromCart,
    calculateTotal,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <div
      className={
        cartd
          ? cartd
          : "fixed h-full right-0 top-0 w-full sm:w-1/3 bg-white shadow-lg p-4 overflow-auto translate-x-full transition-transform"
      }
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-3xl">Cart</h2>
        <IoIosClose
          onClick={() => {
            setCartDrawer(null);
          }}
          className="text-3xl cursor-pointer hover:text-gray-500 transition"
        />
      </div>

      <div className="overflow-y-auto sm:h-80 h-56 scrollbar-hide">
        {cartItems.length === 0 ? (
          <p className="my-5">Your cart is empty.</p>
        ) : (
          cartItems?.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4 border-2 rounded-md p-4 bg-white shadow-md"
            >
              <img
                width={60}
                src={item.images}
                alt={item.title}
                className="rounded-md"
              />

              <div className="w-full ml-4">
                <span className="block font-semibold text-sm">
                  {item.title}
                </span>
                <span className="flex items-center bg-whitesmoke-100 mt-2 shadow rounded w-fit">
                  <FiMinus onClick={() => decreaseQuantity(item.id)} />
                  {item.quantity}

                  <FiPlus onClick={() => increaseQuantity(item.id)} />
                </span>
              </div>

              <div className="text-right">
                <span className="block text-gray-800 font-semibold">
                  ${item.TotalPrice ? item.TotalPrice : item.price}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <MdDeleteOutline className="text-xl" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="fixed w-full sm:w-1/3 bottom-0 bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <p className="text-gray-700 font-medium">{cartItems.length} item</p>
          <div className="flex items-center text-right">
            <p className="text-sm text-gray-500 mr-2">Subtotal:</p>
            <p className="text-xl font-semibold text-teal-600">
              ${calculateTotal()}
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <Link to="/Cart">
            <button className="bg-black sm:w-100 w-full text-white py-2 px-2 rounded-md flex items-center space-x-4 hover:bg-gray-800">
              <IoCartOutline />
              <span>Continue to Cart</span>
            </button>
          </Link>
          <button
            onClick={() => setCartDrawer(null)}
            className="border sm:w-100 w-1/2 border-gray-400 text-gray-700 py-2 px-2 rounded-md hover:bg-gray-100"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
