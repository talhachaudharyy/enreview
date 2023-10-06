/* eslint-disable */

import React from 'react';

const Slide = () => (
  <div className="bg-white p-4 px-4 w-96 rounded-lg shadow-md">
    <div className="flex items-center">
      <img src="/google.png" alt="Company Logo 1" className="w-12 h-12 object-cover" />
      <h3 className="text-l font-semibold pb-5 text-gray-800 ml-4">Commercial Industrial Placement</h3>
    </div>

    <div className="flex pl-16 pb-4">
      <img src="/bag.png" alt="Calendar Icon" className="w-4 h-4 mr-2" />
      <p className="text-sm text-gray-500">Google</p>

      <img src="/calender.png" alt="Calendar Icon" className="w-4 h-4 ml-2" />
      <p className="text-sm ml-2 text-gray-600">Internship (10 Months+)</p>
    </div>

    <div className="flex items-center mt-2 mb-4">
      <img src="/dollar.svg" alt="Dollar Icon" className="w-6 h-6 mr-2" />
      <p className="text-sm font-semibold text-black">10 Coins</p>
    </div>

    <hr className="border-t border-gray-300 mb-4" />

    <div className="flex justify-between">
      <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-2 rounded-md">Apply Now</button>
      <button className="bg-white hover:bg-gray-600 text-gray-400 border border-gray-400 px-8 py-2 rounded-md">View Program</button>
    </div>
  </div>
);

const Internship = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-8">Latest Internships</h2>
        {/* Buttons Row */}
        <div className="flex justify-center space-x-6 mb-8">
          {/* Button 1 */}
          <div className="flex bg-purple-800 px-3 py-2 text-white text-sm rounded border-black">
            <img className="relative w-5 h-5 mr-2 bg-purple-800" alt="" src="/vector10.svg" />
            Accounting
          </div>

          <div className="flex text-black px-3 py-2 text-sm rounded border-gray-300 border">
            <img className="relative w-5 h-5 mr-2" alt="" src="/vector.png" />
            Marketing
          </div>

          <div className="flex text-black px-3 py-2 text-sm rounded border-gray-300 border">
            <img className="relative w-5 h-5 mr-2 " alt="" src="/Vector2.png" />
            Engineer
          </div>

          <div className="flex text-black px-3 py-2 text-sm rounded border-gray-300 border">
            <img className="relative w-5 h-5 mr-2" alt="" src="/vector3.png" />
            Translation
          </div>

          <div className="flex text-black px-3 py-2 text-sm rounded border-gray-300 border">
            <img className="relative w-5 h-5 mr-2" alt="" src="/vector4.png" />
            Graphic Design
          </div>
          {/* Add more buttons here */}
        </div>

        {/* Slides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pl-10 gap-96">
          {[1, 2, 3].map((index) => (
            <Slide key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internship;
