"use client";
import React from "react";
import { ShoppingCartIcon, MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white py-4 drop-shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <Link href={'/'}>
            <span className="text-2xl cursor-pointer font-bold text-gray-800">
              Fardan ka  <span className="text-green-500">Bazaar</span>
            </span>
          </Link>
        </div>

        {/* Middle Section - Navigation */}
        <nav className="hidden sm:flex space-x-6">
          <Link href="/" className="hover:text-green-500">Offers</Link>
          <Link href="/" className="hover:text-green-500">Products</Link>
          <Link href="/" className="hover:text-green-500">Deals</Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-green-500" />
          <UserIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-green-500" />
          <Link href="/cart">
            <ShoppingCartIcon className="h-6 w-6 cursor-pointer text-gray-500 hover:text-green-500" />
          </Link>
          <button className="hidden md:inline-block text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600">
            Cart
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;