/* eslint-disable */
import React from 'react';


const Category = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold py-5 text-black mb-6">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Box 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3  ">
              <img
                src="/c1.svg"
                alt="Service 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">College and Universities</h3>
          </div>

          {/* Box 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3 ">
              <img
                src="/c2.svg"
                alt="Service 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">Courses & Classes</h3>
          </div>

          {/* Box 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3 ">
              <img
                src="/c3.svg"
                alt="Service 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">Educational Services</h3>
          </div>

          {/* Box 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3 ">
              <img
                src="/c4.svg"
                alt="Service 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">Language Learning</h3>
          </div>

          {/* Box 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3 ">
              <img
                src="/c5.svg"
                alt="Service 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">Music and Theater Classes</h3>
          </div>

          {/* Box 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3 ">
              <img
                src="/c6.svg"
                alt="Service 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">Vocational Training Classes</h3>
          </div>

          {/* Box 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3 ">
              <img
                src="/c7.svg"
                alt="Service 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">College and Universities</h3>
          </div>

          {/* Box 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="bg-gray-200 rounded-full p-3 ">
              <img
                src="/c8.svg"
                alt="Service 1"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mt-4">College and Universities</h3>
          </div>

          {/* Add more boxes as needed */}
        </div>
      </div>
    </section>
  );
};

export default Category;
