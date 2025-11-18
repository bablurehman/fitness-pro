// src/components/Header.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-green-50 shadow-md mx-auto">
      <div className=" flex md:flex-row justify-between items-center px-5 py-2 gap-2 text-slate-900">

        {/* Contact Info */}
        <div className="flex flex-row md:flex-row md:gap-6 w-full md:w-auto gap-2 justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-slate-900" />
            <a href="mailto:info@fitnesspro.com" className="hover:text-blue-400 transition">
              info@fitnesspro.com
            </a>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <FaPhoneAlt className="text-slate-900" />
            <a href="tel:+911234567890" className="hover:text-blue-500 transition">
              +91 123 456 7890
            </a>
          </div>
        </div>

        {/* Marquee / Announcement */}
        <div className="w-full hidden xl:flex lg:flex md:flex sm:hidden md:w-1/3 my-1 md:my-0">
          <div className="overflow-hidden whitespace-nowrap text-center text-sm md:text-base text-slate-900">
            <marquee behavior="scroll" direction="left" className=" font-semibold">
              Your fitness journey starts here! Join us for exclusive offers and updates.
            </marquee>
          </div>
        </div>

        {/* Social Icons */}
        <div className=" xl:flex lg:flex md:flex sm:flex hidden gap-3 justify-center md:justify-end w-full md:w-auto">
          <a href="#" className="p-1 border rounded-full border-slate-900 hover:text-green-400 hover:bg-black transition"><FaFacebookF /></a>
          <a href="#" className="p-1 border rounded-full border-slate-900 hover:text-green-400 hover:bg-black transition"><FaInstagram /></a>
          <a href="#" className="p-1 border rounded-full border-slate-900 hover:text-green-400 hover:bg-black transition"><FaTwitter /></a>
          <a href="#" className="p-1 border rounded-full border-slate-900 hover:text-green-400 hover:bg-black transition"><FaYoutube /></a>
        </div>

        {/* CTA Button */}
        <div className="hidden xl:flex lg:flex md:hidden sm:flex whitespace-nowrap ">
          <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-3 py-1 rounded transition shadow-md">
            Get a quote!
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
