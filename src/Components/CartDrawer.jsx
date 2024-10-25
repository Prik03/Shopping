// CartDrawer.js
import { useCart } from "../context/CartContext";
import { IoIosClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from "react";

const CartDrawer = ({ cartd, setCartDrawer }) => {
  const { cartItems, removeFromCart, calculateTotal } = useCart();
  // const [Quantity, setQuantity] = useState(1);

  console.log(cartItems.quantity);
  return (
    <div
      className={
        cartd
          ? cartd
          : "fixed h-full right-0 top-0 w-full sm:w-1/3 bg-white shadow-lg p-4 overflow-y-auto translate-x-full transition-transform"
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
      {cartItems.length === 0 ? (
        <p className="my-5">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
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
              <span className="block font-semibold text-sm">{item.title}</span>
              <span className="block text-gray-400 text-xs">
                {/* <div className="flex items-center">
                  Qty:{" "}
                  <FaMinus
                    className="ml-2"
                    onClick={() => setQuantity(Quantity - 1)}
                  />
                  <span className="text-bold">{Quantity}</span>{" "}
                  <FaPlus onClick={() => setQuantity(Quantity + 1)} />
                </div> */}
              </span>
            </div>

            <div className="text-right">
              <span className="block text-gray-800 font-semibold">
                ${item.price}
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
      {cartItems.length > 0 && (
        <div>
          <h3>Total : {calculateTotal()}</h3>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 w-full sm:w-1/3 bg-white p-4 shadow-md ">
          <button className=" w-full bg-black text-white p-4 text-xl font-bold hover:bg-gray-800 transition rounded">
            <Link to="/Cart"> Go to Cart Page</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;
