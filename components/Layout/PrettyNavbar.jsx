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
        <div className="hidden md:block">
          <div className="ml-4 flex items-baseline space-x-4">
            <Link
              href="/overview"
              className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Overview
            </Link>
            <Link
              href="/lessons"
              className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Lessons
            </Link>
            <Link
              href="/tutoring"
              className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Tutoring
            </Link>
            <Link
              href="/chat"
              className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Chat
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-white font-bold text-xl">My Website</a>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <a className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </a>
              </Link>
              <Link href="/about">
                <a className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
              </Link>
              <Link href="/blog">
                <a className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Blog
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-baseline space-x-4">
              <Link href="/overview">
                <a className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Overview
                </a>
              </Link>
              <Link href="/lessons">
                <a className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Lessons
                </a>
              </Link>
              <Link href="/tutoring">
                <a className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Tutoring
                </a>
              </Link>
              <Link href="/chat">
                <a className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">
                  Chat
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PrettyNavbar;
