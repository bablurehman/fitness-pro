// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();


  // Detect scroll to add shadow / blur
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change and close mobile menu
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full z-40 top-[-8px] sm:-top-0 transition-all duration-300 ${
        scrolling ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-gray-900"
      } text-white`}
      style={{ marginTop: "44px" }} // space below top header
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4 relative">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl md:text-3xl font-extrabold tracking-wide text-green-400 hover:text-green-300 transition-colors"
        >
          Fitness<span className="text-white">Pro</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                to={item.path}
                className={`transition-colors ${
                  location.pathname === item.path ? "text-green-300" : "hover:text-green-300"
                }`}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-green-400 focus:outline-none z-50 p-2 hover:bg-green-600/20 rounded-lg transition"
          aria-label="Toggle Menu"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
  className={`md:hidden w-full bg-gray-900/95 transition-max-height duration-500 ease-in-out overflow-hidden ${
    open ? "max-h-screen py-4 border-t border-gray-500" : "max-h-0"
  }`}
>
  <ul className="flex flex-col items-center space-y-3 text-lg px-4">
    {navItems.map((item) => (
      <li key={item.name} className="w-full text-center">
        <Link
          to={item.path}
          onClick={() => setOpen(false)}
          className="block py-2 hover:text-green-300 transition-colors text-lg font-medium"
        >
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

    </nav>
  );
};

export default Navbar;
