import React from "react";
import { IoClose } from "react-icons/io5";

// Maps gradient direction prop to Tailwind-safe class names
const gradientDirectionMap = {
  "to-r": "bg-gradient-to-r",
  "to-l": "bg-gradient-to-l",
};

const BackgroundShape = ({ position, gradientDirection = "to-r" }) => {
  const gradientClass = gradientDirectionMap[gradientDirection] || "bg-gradient-to-r";

  return (
    <div
      aria-hidden="true"
      className={`absolute top-1/2 ${position} -z-10 -translate-y-1/2 transform-gpu blur-2xl`}
    >
      <div
        className={`aspect-[577/310] w-[36.0625rem] ${gradientClass} from-[#ff80b5] to-[#9089fc] opacity-30`}
        style={{
          clipPath:
            "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
        }}
      />
    </div>
  );
};

export default function TopBanner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      {/* Background blur shapes */}
      <BackgroundShape position="left-[max(-7rem,calc(50%-52rem))]" gradientDirection="to-r" />
      <BackgroundShape position="left-[max(45rem,calc(50%+8rem))]" gradientDirection="to-l" />

      {/* Banner content */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-gray-900">
          <strong className="font-semibold">Smilelink 2025</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={1} cx={1} cy={1} />
          </svg>
          Join us in Lagos from June 7 – 9 to see what’s coming next.
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Register now <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      {/* Dismiss button */}
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <IoClose className="size-5 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
