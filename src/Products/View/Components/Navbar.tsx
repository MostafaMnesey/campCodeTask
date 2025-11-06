import React, { useState } from "react";
import logo from "/src/assets/logo.avif";
import { Icon } from "@iconify/react";

type Props = {
  lang: string;
  changeLang: (lang: string) => void;
};

export default function Navbar({ changeLang, lang }: Props) {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center justify-between space-x-3">
          <img src={logo} className="h-8 w-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Task
          </span>
        </div>

        {/* Lang button */}
        <div className="relative">
          <button
            onClick={() => setShowNav((prev) => !prev)}
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <span>{lang.toUpperCase()}</span>
            <Icon icon="iconoir:language" className="ms-2" />
          </button>

          {/* Dropdown */}
          {showNav && (
            <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <button
                    onClick={() => {
                      changeLang("ar");
                      setShowNav(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    العربية
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      changeLang("en");
                      setShowNav(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    English
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
