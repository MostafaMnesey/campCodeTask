import React, { useState } from "react";
import logo from "/src/assets/logo.avif";
import { Icon } from "@iconify/react";
import { Language } from "../../../utils/Enums";

type Props = {
  lang: string;
  changeLang: (lang: string) => void;
};


function ButtonLang({ changeLang, setShowNav }: { changeLang: (lang: string) => void; setShowNav: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (<button onClick={() => {
    changeLang(Language.en);
    setShowNav(false);
  }} className="block w-full bg-gray-100 text-left px-4 py-2 hover:bg-gray-800 hover:text-white rounded-lg transition-all">
    English
  </button>);
}


export default function Navbar({ changeLang, lang }: Props) {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="bg-white border-gray-200  relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center justify-between space-x-3">
          <img src={logo} className="h-8 w-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap :text-white">
            Task
          </span>
        </div>

        {/* Lang button */}
        <div className="relative">
          <button
            onClick={() => setShowNav((prev) => !prev)}
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none  focus:ring-gray-50 "
            type="button"
          >
            <span>{lang.toUpperCase()}</span>
            <Icon icon="iconoir:language" className="ms-2" />
          </button>

          {/* Dropdown */}
          {showNav && (
            <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-2 text-sm bg-gray-100 text-gray-700 ">
                <li>
                  <button
                    onClick={() => {
                      changeLang(Language.ar);
                      setShowNav(false);
                    }}
                    className="block w-full text-left bg-gray-100  px-4 py-2   hover:bg-gray-800 hover:text-white rounded-lg transition-all"
                  >
                    العربية
                  </button>
                </li>
                <li>
                  <ButtonLang changeLang={changeLang} setShowNav={setShowNav}></ButtonLang>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
