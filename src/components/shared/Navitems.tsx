// src/components/Navitems.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavitemsProps {
  closeMenu?: () => void;
}

const navitems = [
  { label: "Home", url: "/" },
  { label: "About-us", url: "/about" },
  { label: "Contact-us", url: "/contact" },
  { label: "Login", url: "/login" },
];

const Navitems: React.FC<NavitemsProps> = ({ closeMenu }) => {
  const location = useLocation(); // ✅ Needed in client-side apps like React Router

  return (
    <nav>
      <ul className="flex gap-5 md:gap-4 items-center flex-col md:flex-row text-black">
        {navitems.map((item, index) => {
          const isActive = location.pathname === item.url;

          return (
            <li
              key={index}
              className={`font-Roboto lg:text-2xl text-xl rounded-md px-3 py-2 transition duration-300 ${
                isActive
                  ? "text-white bg-gradient-to-r from-violet-400 via-blue-500 to-indigo-500"
                  : "text-black md:text-white hover:text-cyan-300 hover:scale-105"
              }`}
            >
              <Link to={item.url} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          );
        })}

        <li>
          <Link to="/register" onClick={closeMenu}>
            <button className="px-4 py-2 cursor-pointer bg-white text-2xl text-[#1E91B6] font-Roboto rounded-md">
              Sign-up
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navitems;
