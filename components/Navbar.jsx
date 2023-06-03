"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <nav className="bg-gradient-to-b from-green-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">
                <Image
                  src="/pastit-transparent.png"
                  loading="lazy"
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
                  className="text-black font-bold hover:bg-green-800 px-3 py-2 rounded-md text-sm bg-green-600 mr-2"
                >
                  <span className="font-bold text-white ">+ </span>PASTE
                </Link>
                <Link
                  href="/about"
                  className="text-gray-900 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <div>
                <svg
                  xmlns="<http://www.w3.org/2000/svg>"
                  id="menu-button"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={menuToggle}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              {menuOpen ? (
                <div
                  className="mt-36 w-full md:flex md:items-center md:w-auto"
                  id="menu"
                >
                  <ul className="text-base text-gray-800 pt-4 md:flex md:justify-between md:pt-0">
                    <li className="bg-green-500 rounded-md w-20 px-3">
                      <Link className="py-2 block" href="/">
                        <span className="font-bold text-white text-xs mr-1">
                          +
                        </span>
                        <span className="font-bold text-xs">PASTE</span>
                      </Link>
                    </li>
                    <li className="bg-green-500 rounded-md w-20 pl-6 mt-1 hover:font-extrabold hover:bg-slate-600">
                      <Link className="md:p-4 py-2 block" href="/about">
                        <span className="font-bold text-sm">About</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
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
