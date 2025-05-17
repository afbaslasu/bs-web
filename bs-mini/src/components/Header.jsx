
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "6+" },
  { name: "Full-time colleagues", value: "50+" },
  { name: "Hours per week", value: "48" },
  { name: "Paid time off", value: "Unlimited" },
];

export default function Header() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 -z-10 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('../src/assets/images/web-tech-meeting-148.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 -z-5 bg-gradient-to-tr from-indigo-700 via-purple-600 to-pink-500 mix-blend-multiply opacity-80" />
        <div className="absolute inset-0 -z-5 bg-gradient-to-tr from-blue-900 via-yellow-800 to-yellow-600 mix-blend-multiply opacity-80" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Work with us
          </h2>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
            Partner with us for fast, reliable web development focused on clean
            code, modern tech, and real results. We build scalable, user-first
            solutions that grow with your business.
          </p>
        </div>

        {/* Links and stats */}
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center hover:underline"
              >
                {link.name}
                <FaArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
