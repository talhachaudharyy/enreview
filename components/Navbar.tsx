/* eslint-disable */

import React from 'react'
import { useState } from 'react';

const Navbar = () => {
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <nav className="bg-white p-4 lg:flex lg:items-center lg:justify-between">
      <div className="text-green-600 font-extrabold lg:px-10">ED REVIEW</div>
      <div className="flex items-center justify-center space-x-4 lg:space-x-10">
        <ul className="hidden lg:flex space-x-4">
          <li className="text-black font-semibold cursor-pointer">Companies</li>
          <li className="text-black font-semibold cursor-pointer">Courses</li>
          <li className="text-black font-semibold cursor-pointer">Book A Demo</li>
          <li className="text-black font-semibold cursor-pointer">Internship</li>
        </ul>

        <div>
            <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.93175 1.56218C9.11849 1.10062 9.43882 0.705344 9.85168 0.427018C10.2645 0.148692 10.7511 0 11.249 0C11.7469 0 12.2335 0.148692 12.6463 0.427018C13.0592 0.705344 13.3795 1.10062 13.5663 1.56218C15.4145 2.07048 17.0448 3.17146 18.2067 4.69602C19.3687 6.22058 19.998 8.08442 19.9981 10.0013V15.8719L22.2878 19.3066C22.4134 19.4948 22.4856 19.7136 22.4965 19.9396C22.5075 20.1656 22.4569 20.3904 22.3502 20.5899C22.2434 20.7894 22.0845 20.9562 21.8904 21.0725C21.6963 21.1887 21.4742 21.2501 21.248 21.2501H15.5798C15.4293 22.2914 14.9087 23.2436 14.1133 23.9323C13.318 24.6209 12.3011 25 11.249 25C10.1969 25 9.18005 24.6209 8.38468 23.9323C7.58931 23.2436 7.0687 22.2914 6.91821 21.2501H1.25006C1.02378 21.2501 0.801732 21.1887 0.607612 21.0725C0.413492 20.9562 0.25458 20.7894 0.147829 20.5899C0.0410782 20.3904 -0.00950619 20.1656 0.00147216 19.9396C0.0124505 19.7136 0.0845798 19.4948 0.210165 19.3066L2.49992 15.8719V10.0013C2.49992 5.97172 5.22464 2.57708 8.93175 1.56218ZM9.48169 21.2501C9.61078 21.6159 9.85013 21.9326 10.1668 22.1567C10.4834 22.3807 10.8617 22.501 11.2496 22.501C11.6375 22.501 12.0158 22.3807 12.3325 22.1567C12.6491 21.9326 12.8885 21.6159 13.0176 21.2501H9.48044H9.48169ZM11.249 3.75195C9.59158 3.75195 8.00203 4.41036 6.83005 5.58234C5.65807 6.75432 4.99966 8.34387 4.99966 10.0013V16.2506C4.99972 16.4975 4.92665 16.7389 4.78968 16.9443L3.58606 18.7504H18.9107L17.7071 16.9443C17.5705 16.7388 17.4979 16.4974 17.4983 16.2506V10.0013C17.4983 8.34387 16.8399 6.75432 15.668 5.58234C14.496 4.41036 12.9064 3.75195 11.249 3.75195Z" fill="black"/></svg>
        </div>
        <div>
          <img
            src="/r1.png"
            alt="Profile"
            onClick={toggleProfileDropdown}
            className="h-8 w-8 rounded-full cursor-pointer"
          />
          {isProfileDropdownOpen && (
            <ul className="absolute  mt-2  bg-white text-black border shadow-lg">
              <li className='px-5 pt-2'>My Reviews</li>
              <li className='px-5 pt-2'>Intership Applied</li>
              <li className='px-5 pt-2'>Settings</li>
              <li className='px-6 mb-2 pt-2 '>logout</li>
            </ul>
          )}
        </div>
        
        <button className="bg-green-500 text-black font-semibold px-4 py-2 rounded ">Post A Review</button>
      </div>
    </nav>
  );
};

export default Navbar
