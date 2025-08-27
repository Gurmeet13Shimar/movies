import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex w-full z-50 transition duration-300 ease-in-out bg-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-purple-500 font-bold text-3xl">
              Cinema<span className="text-white">flix</span>
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-purple-400 transition-all font-medium">
            Home
          </a>
          <a href="#trending" className="text-white hover:text-purple-400 transition-all font-medium">
            Trending
          </a>
          <a href="#popular" className="text-white hover:text-purple-400 transition-all font-medium">
            Popular
          </a>
          <a href="#top-rated" className="text-white hover:text-purple-400 transition-all font-medium">
            Top Rated
          </a>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:block relative search-container">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-48 
                         focus:w-64 transition-all duration-300 focus:outline-none 
                         focus:ring-2 focus:ring-purple-500/50"
            />

            {/* Spinner (example conditional rendering) */}
            <div className="absolute right-3 top-2.5">
              <svg
                className="w-4 h-4 text-neutral-400 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
            </div>

            {/* Example dropdown search results */}
            <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
              <ul className="divide-y divide-neutral-700">
                <li className="hover:bg-neutral-700">
                  <button className="flex items-center p-3 w-full text-left">
                    <div className="w-10 h-10 bg-neutral-700 rounded overflow-hidden flex-shrink-0">
                      {/* If image exists */}
                      <img src="" alt="" className="w-full h-full object-cover" />
                      {/* Else */}
                      <div className="w-full h-full flex items-center justify-center text-neutral-400 text-xs">
                        No image
                      </div>
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-white truncate">
                        Movie Title
                      </p>
                      <p className="text-xs text-neutral-400">Release Date</p>
                    </div>
                  </button>
                </li>
              </ul>
            </div>

            {/* No results state */}
            <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
              <div className="p-4 text-center text-neutral-400 text-sm">
                No movies found matching your search
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="mt-4 pb-4 space-y-4 md:hidden px-4">
        <a href="#" className="block text-white hover:text-purple-400 transition-colors py-2">
          Home
        </a>
        <a href="#trending" className="block text-white hover:text-purple-400 transition-all font-medium">
          Trending
        </a>
        <a href="#popular" className="block text-white hover:text-purple-400 transition-all font-medium">
          Popular
        </a>
        <a href="#top-rated" className="block text-white hover:text-purple-400 transition-all font-medium">
          Top Rated
        </a>

        {/* Mobile Search */}
        <div className="relative mt-3 search-container">
          <input
            type="text"
            placeholder="Search movies..."
            className="bg-neutral-800/80 text-white px-4 py-2 rounded-full text-sm w-full 
                       focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />

          {/* Spinner */}
          <div className="absolute right-3 top-2.5">
            <svg
              className="w-4 h-4 text-neutral-400 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </div>

          {/* Example mobile results */}
          <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
            <ul className="divide-y divide-neutral-700">
              <li className="hover:bg-neutral-700">
                <button className="flex items-center p-3 w-full text-left">
                  <div className="w-10 h-10 bg-neutral-700 rounded overflow-hidden flex-shrink-0">
                    <img src="" alt="" className="w-full h-full object-cover" />
                    <div className="w-full h-full flex items-center justify-center text-neutral-400 text-xs">
                      No image
                    </div>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-white truncate">
                      Movie Title
                    </p>
                    <p className="text-xs text-neutral-400">Release Date</p>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          {/* No results state */}
          <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
            <div className="p-4 text-center text-neutral-400 text-sm">
              No movies found among them
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
