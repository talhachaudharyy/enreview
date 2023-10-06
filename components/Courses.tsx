/* eslint-disable */

import React from 'react'

const Slide = () => (
    <div className="bg-white p-4 px-4 w-96 rounded-lg shadow-md">
    <div className="flex items-center">
      <img src="/img4.png" alt="Company Logo 1" className="w-12 h-12 object-cover" />
      <h3 className="text-l font-semibold text-gray-800 ml-4">Data Science</h3>
</div>
    <div className="flex pl-16">
      <p className="text-sm text-gray-500">Acemegrade</p>
    </div>
    <div className="flex items-center mt-2 mb-4">
      <img src="/l2.svg" alt="location Icon" className="w-6 h-6 mr-2" />
      <p className="text-sm font-semibold text-gray-500">Mumbai, India</p>
      <div className="ml-auto flex items-center text-green-500">
        {/* Star icon */}
        
        <svg width="20px" height="20px" viewBox="0 -0.5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z" fill="#3cbe6e"></path> </g></svg>    

        <p className="text-sm pl-2">4.9</p>
      </div>
      <p className="text-sm pl-2 text-gray-500">(345 Reveiws)</p>
    </div>
    
    <hr className="border-t border-gray-300 mb-4" />
    <div className="flex justify-between">
      <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-2 rounded-md">Apply Now</button>
      <button className="bg-white hover:bg-gray-200 text-gray-400 border border-gray-400 px-8 py-2 rounded-md">View Program</button>
    </div>
  </div>
  );
  


const Courses = () => {

    
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-8">Courses We Offer</h2>
       </div>



       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pl-14 gap-96">
          {[1, 2, 3].map((index) => (
            <Slide key={index} />
          ))}
        </div>
</section>
  )
}

export default Courses
