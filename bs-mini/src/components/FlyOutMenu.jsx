
import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function FlyOutMenu() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show flyout after 10 seconds
    const timer = setTimeout(() => {
      setVisible(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-11/12 max-w-md rounded-lg bg-white p-6 shadow-xl">
        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 focus:outline-none"
        >
          <IoClose className="h-6 w-6" aria-label="Close menu" />
        </button>

        {/* Menu content */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Flyout Menu
        </h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block text-gray-700 hover:text-indigo-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-indigo-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-indigo-600">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:text-indigo-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
