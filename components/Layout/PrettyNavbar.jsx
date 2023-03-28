import React from "react";
import Link from "next/link";

const PrettyNavbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              My Website
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PrettyNavbar;
