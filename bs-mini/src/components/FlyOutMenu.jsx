import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FaShieldAlt, FaStar, FaBullseye, FaEye } from "react-icons/fa";

export default function FlyOutMenu() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative w-11/12 max-w-md bg-white rounded-2xl p-6 shadow-2xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 focus:outline-none"
        >
          <IoClose className="h-6 w-6" aria-label="Close menu" />
        </button>

        {/* Hypnotic Header */}
        <h2 className="text-2xl font-extrabold text-gray-800 text-center mb-4">
          Unlock Your Digital Edge
        </h2>

        {/* Trust & Proof */}
        <div className="flex items-center justify-center space-x-4 text-gray-600 mb-6">
          <FaStar className="h-5 w-5 text-yellow-500" />
          <span className="font-medium">98% Client Satisfaction</span>
        </div>

        {/* Core Benefits */}
        <ul className="space-y-3 text-gray-700 mb-6">
          <li className="flex items-start">
            <FaShieldAlt className="mt-1 mr-2 text-blue-500" />
            <span>Built on Authority & Proof</span>
          </li>
          <li className="flex items-start">
            <FaEye className="mt-1 mr-2 text-blue-500" />
            <span>Your Vision, Amplified</span>
          </li>
          <li className="flex items-start">
            <FaBullseye className="mt-1 mr-2 text-green-500" />
            <span>Data‑driven designs that convert</span>
          </li>
          <li className="flex items-start">
            <FaStar className="mt-1 mr-2 text-purple-500" />
            <span>Award‑winning team, ahead of schedule</span>
          </li>
        </ul>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="#get-in-touch-form"
            onClick={() => setVisible(false)}
            className="inline-block bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
