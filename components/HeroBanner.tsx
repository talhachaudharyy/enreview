/* eslint-disable */

import React from 'react';

const HeroBanner = () => {
  return (
    <section
      className="flex flex-col max-h-screen text-white bg-center bg-cover relative"
      style={{
        backgroundImage: 'url("/bannerbg.png")',
        background:
          'linear-gradient(rgba(77, 29, 150, 0.9), rgba(77, 29, 150, 0.9)), url("/bannerbg.png")',
      }}
    >
      <div className="container mx-auto h-full flex items-center">
        <div className="w-1/2 text-white">
          <h1 className="text-5xl font-bold mb-4">To be the best,</h1>
          <h2 className="text-5xl font-bold text-green-500">Choose the best...</h2>
          <div className="mt-6 flex items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border text-black focus:outline-none focus:border-green-400"
            />
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold cursor-pointer px-4 py-2 rounded-lg ml-2">
              Search
            </button>
          </div>
        </div>
        <div className="w-2/3">
          <img
            src="/bannerimg.png"
            alt="Your Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
