// Header.js

import logo from "../assets/E-commerce.png";
import { Link } from "react-router-dom";

const Header = ({ cartbutton, search }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white overflow-y-auto sticky top-0">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={logo} className="h-10" alt="Flowbite Logo" />
      </Link>
      {search}
      {cartbutton}
    </header>
  );
};

export default Header;
