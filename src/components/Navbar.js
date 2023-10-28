import React from "react";

function Navbar({ onSearch }) {
  return (
    <nav className="bg-gray-900 px-5 sm:px-24 py-5">
      <div className="container flex flex-wrap justify-between items-center mx-auto gap-5 sm:gap-0">
        <a href="/" className="flex items-center">
          <span className="self-center text-white text-2xl font-bold whitespace-nowrap">
            📒My
          </span>
          <span className="self-center text-blue-500 text-2xl font-bold whitespace-nowrap">
            Notes
          </span>
        </a>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            onChange={(event) => onSearch(event)}
            type="text"
            id="search-navbar"
            className="block p-2 pl-10 w-full text-white bg-inherit rounded-lg sm:text-sm"
            placeholder="Cari..."
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
