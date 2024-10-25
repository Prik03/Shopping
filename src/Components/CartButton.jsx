import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartButton = ({ handleClass }) => {
  const { cartItems } = useCart();

  return (
    <>
      <button
        type="button"
        onClick={() => handleClass()}
        className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <FaCartPlus />
        <span className="sr-only">Cart</span>
        {cartItems.length ? (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {cartItems.length}
          </div>
        ) : null}
      </button>
    </>
  );
};

export default CartButton;
