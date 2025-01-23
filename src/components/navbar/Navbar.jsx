import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import DarkMode from "./DarkMode";

const MenuLinks = [
  { id: 1, link: "/", name: "Home" },
  { id: 2, link: "/shop", name: "Shop" },
  { id: 3, link: "/about", name: "About" },
  { id: 4, link: "/blog", name: "Blogs" },
];
const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/shop" },
  { id: 2, name: "Best Selling", link: "/shop" },
  { id: 3, name: "Top Rated", link: "/shop" },
];

const initialCartItems = [
  { id: 1, name: "Galaxy Z Flip 3", price: 999 },
  { id: 2, name: "Galaxy Watch 5", price: 299 },
];

export const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems] = useState(initialCartItems);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="navbar dark:bg-gray-900 dark:text-white duration-400 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Toggle Button */}
          <div className="flex items-center gap-4">
            <a href="/" className="logo">
              samsung
            </a>
          </div>

          {/* Menu Links */}
          <div
            className={`menu-container lg:flex ${
              menuOpen ? "block" : "hidden"
            } absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent dark:bg-gray-900 lg:dark:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0`}
          >
            <ul className="menu lg:flex lg:items-center">
              {MenuLinks.map((data, index) => (
                <li key={index} className="mb-4 lg:mb-0">
                  <a href={data.link}>{data.name}</a>
                </li>
              ))}
              {/* Dropdown */}
              <li className="dropdown relative mb-4 lg:mb-0">
                <button
                  className="flex items-center gap-[2px]"
                  onClick={handleDropdownToggle}
                >
                  Quick Links <FaCaretDown />
                </button>
                {dropdownOpen && (
                  <div className="dropdown-menu bg-white dark:bg-gray-800 shadow-lg rounded-md absolute top-full left-0 w-full lg:w-auto mt-2">
                    <ul>
                      {DropdownLinks.map((data, index) => (
                        <li key={index} className="px-4 py-2">
                          <a href={data.link}>{data.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Right Side: Search, Cart, and Dark Mode */}
          <div className="flex gap-4 relative">
            <div className="search-group hidden sm:flex">
              <input type="text" placeholder="search" />
              <IoMdSearch />
            </div>
            <button className="cart-btn" onClick={handleCartToggle}>
              <FaShoppingCart />
              <div className="cart-count" id="count">
                {cartItems.length}
              </div>
            </button>
            <DarkMode />
            <button
              className="lg:hidden text-2xl"
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Shopping List */}
      {showCart && (
        <div className="shopping-list absolute right-0 top-full mt-2 bg-white shadow-lg w-64 rounded-lg p-4 z-50">
          <h3 className="text-lg font-bold mb-2">Shopping List</h3>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-2"
                >
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}
    </div>
  );
};
