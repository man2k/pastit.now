"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [eve, setEve] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  const menuToggle = (i) => {
    i === undefined ? setMenuOpen(true) : setMenuOpen(i);
  };

  useEffect(() => {
    menuToggle(false);

    // return () => {
    //   menuToggle(false);
    // };
  }, [path]);

  return (
    <>
      <nav className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600 border-b-2 border-purple-900 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                <Image
                  src="/pastit-transparent.png"
                  // loading="lazy"
                  width={100}
                  height={100}
                  alt="Pastit.Now"
                />
              </Link>
            </div>
            <div className="flex w-full justify-center mr-36">
              <div className="hidden sm:block sm:ml-6 ">
                <Link
                  href="/"
                  className="text-black font-bold hover:bg-violet-900 px-3 py-2 rounded-md text-sm bg-violet-600 mr-2"
                >
                  <span className="font-bold text-white">+ </span>PASTE
                </Link>
                <Link
                  href="/about"
                  className="text-gray-900 hover:bg-violet-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
              </div>
            </div>

            {/* Mobile View */}

            <div className="sm:hidden">
              <div>
                <svg
                  xmlns="<http://www.w3.org/2000/svg>"
                  id="menu-button"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => {
                    menuToggle(!menuOpen);
                  }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              {menuOpen === true ? (
                // <div
                //   className="mt-36 w-full md:flex md:items-center md:w-auto"
                //   id="menu"
                // >
                <ul
                  className="bg-violet-800 rounded-md text-base text-gray-800 pt-0 md:flex mt-32"
                  // onTouchEnd={() => {
                  //   setMenuOpen(false);
                  // }}
                >
                  <li
                    className="rounded-md w-20 px-3 bg-purple-800"
                    onClick={() => {
                      menuToggle(false);
                    }}
                  >
                    <Link className="py-2 block" href="/">
                      <span className="font-bold text-white text-xs mr-1">
                        +
                      </span>
                      <span className="font-bold text-xs">PASTE</span>
                    </Link>
                  </li>
                  <li
                    className="rounded-md w-20 px-3 mt-1"
                    onClick={() => {
                      menuToggle(false);
                    }}
                  >
                    <Link className="py-2 pl-2 block" href="/about">
                      <span className="font-bold text-xs">About</span>
                    </Link>
                  </li>
                </ul>
              ) : (
                // </div>
                <></>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
