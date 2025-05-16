
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-gray-200 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Branding */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">BrandName</h3>
          <p className="text-gray-400">
            Leading the industry with innovative solutions and exceptional
            service.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white text-gray-400"
            >
              <FaFacebookF className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white text-gray-400"
            >
              <FaTwitter className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-white text-gray-400"
            >
              <FaLinkedinIn className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-white text-gray-400"
            >
              <FaYoutube className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                API Reference
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Community
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Subscription */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Subscribe</h4>
          <p className="text-gray-400">
            Get the latest news and updates right to your inbox.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-l-md bg-indigo-800 px-4 py-2 text-gray-200 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
            >
              Go
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-indigo-700 pt-6 text-center text-sm text-gray-400">
        © 2025 BrandName. All rights reserved.
      </div>
    </footer>
  );
}
