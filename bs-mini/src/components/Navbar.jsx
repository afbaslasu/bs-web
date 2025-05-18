import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";
import Logo from "../assets/images/smilelink-logo-dark.png";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Nav Links */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-auto"
                src={Logo}
                alt="smilelink logo"
              />
            </div>
            <div className="hidden sm:flex sm:space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Search bar (flex‑grows / shrinks) */}
          <div className="flex flex-1 justify-center px-2">
            <div className="w-full max-w-lg">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <input
                id="search"
                type="search"
                placeholder="Search…"
                className="
                  block
                  w-full
                  bg-gray-700
                  text-white
                  placeholder-gray-400
                  rounded-md
                  py-2
                  px-3
                  focus:outline-none
                  focus:bg-gray-600
                  transition
                "
              />
            </div>
          </div>

          {/* Utilities (notifications + profile) */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none"
            >
              <FaBell className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">View notifications</span>
            </button>
            <div className="relative">
              <button
                type="button"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none"
              >
                <span className="sr-only">Open user menu</span>
                <FaUserCircle
                  className="h-8 w-8 text-gray-400 hover:text-white"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
