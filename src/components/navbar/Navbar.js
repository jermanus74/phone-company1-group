import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { useState } from "react";

// menu array
const MenuLinks = [
  { id: 1, link: "/", name: "Home" },
  { id: 2, link: "/shop", name: "Shop" },
  { id: 3, link: "/about", name: "About" },
  { id: 4, link: "/blog", name: "Blogs" },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/shop",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/shop",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/shop",
  },
];

// sample cart data
const initialCartItems = [
  { id: 1, name: "Galaxy Z Flip 3", price: 999 },
  { id: 2, name: "Galaxy Watch 5", price: 299 },
];

export const Navbar = () => {
  const [showCart, setShowCart] = useState(false); // State to toggle shopping list visibility
  const [cartItems, setCartItems] = useState(initialCartItems); // State to hold cart items

  const handleCartToggle = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="navbar dark:bg-gray-900 dark:text-white duration-400 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="/" className="logo">
              samsung
            </a>
            <div className="hidden lg:block">
              <ul className="menu">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link}>{data.name}</a>
                  </li>
                ))}
                <li className="dropdown">
                  <button className="flex items-center gap-[2px]">
                    Quick Links <FaCaretDown />
                  </button>
                  <div className="dropdown-menu">
                    <ul>
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a href={data.link}>{data.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
};
