import React, { useState, useEffect } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import Navbar from "./Navbar";

export default function ResponsiveNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on window resize to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile: show toggle button, hide Navbar */}
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 md:hidden">
        <div className="text-white font-semibold">Logo</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaChevronDown size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 px-4 py-2 space-y-2">
          <a href="#" className="block text-gray-200 hover:text-white">
            Dashboard
          </a>
          <a href="#" className="block text-gray-200 hover:text-white">
            Team
          </a>
          <a href="#" className="block text-gray-200 hover:text-white">
            Projects
          </a>
          <a href="#" className="block text-gray-200 hover:text-white">
            Calendar
          </a>
        </div>
      )}

      {/* Desktop: hide mobile controls, show Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>
    </>
  );
}
