import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { navItems, contactInfo, footerLinks } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-10 bg-slate-950 text-gray-300 pt-10 pb-5">
      <div className="footer-cards mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-10 lg:gap-12">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Fitness<span className="text-green-500">Pro</span>
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Transform your fitness journey with expert trainers, modern
            equipment, and personalized programs designed to help you grow.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 sm:space-x-4 mt-6">
            <a
              href="#"
              className="p-2 bg-slate-800 rounded-lg hover:bg-green-500 transition"
            >
              <FaFacebookF className=" text-[16px] text-sm" />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-800 rounded-lg hover:bg-green-500 transition"
            >
              <FaInstagram className=" text-[16px] text-sm" />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-800 rounded-lg hover:bg-green-500 transition"
            >
              <FaTwitter className=" text-[16px] text-sm" />
            </a>
            <a
              href="#"
              className="p-2 bg-slate-800 rounded-lg hover:bg-green-500 transition"
            >
              <FaYoutube className=" text-[16px] text-sm" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-2">Quick Links</h3>
          <div className="w-12 h-[3px] bg-green-500 mb-4"></div>

          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-2">Support</h3>
          <div className="w-12 h-[3px] bg-green-500 mb-4"></div>

          <ul className="space-y-3">
            {footerLinks.map((item, index) => (
              <li key={index}>
                <a href={item.url} className="hover:text-green-400 transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl text-white font-semibold mb-2">Contact Us</h3>
          <div className="w-12 h-[3px] bg-green-500 mb-4"></div>
          <ul className="space-y-4">
            {contactInfo.map((item, index) => (
              <li
                key={index}
                className={`flex space-x-3 ${
                  index === 2 ? "items-start" : "items-center"
                }`}
              >
                <span className="text-green-500 text-lg mt-1">{item.icon}</span>

                <span className="leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
        © {new Date().getFullYear()} FitnessPro. All rights reserved.
      </div>
    </footer>
  );
}
