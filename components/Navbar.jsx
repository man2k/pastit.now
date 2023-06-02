import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <nav className=" px-4 py-4 flex justify-between items-center bg-gradient-to-bl from-green-500 to-green-700 hover:bg-gradient-to-br">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav> */}
      <nav class="bg-gradient-to-b from-green-500 to-green-600 hover:bg-gradient-to-b ">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex-shrink-0">
              <Link href="/" class="text-white font-bold text-xl">
                <Image
                  src="/pastit-transparent.png"
                  loading="lazy"
                  width={100}
                  height={100}
                  alt="Pastit.Now"
                />
              </Link>
            </div>
            <div class="flex w-full justify-center mr-36">
              <div class="hidden sm:block sm:ml-6 ">
                <Link
                  href="/"
                  class="text-black font-bold hover:bg-green-800 px-3 py-2 rounded-md text-sm bg-green-600 mr-2"
                >
                  <span className="font-bold text-white ">+ </span>PASTE
                </Link>
                <Link
                  href="/about"
                  class="text-gray-900 hover:bg-green-800 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
