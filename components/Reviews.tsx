/* eslint-disable */

import React from 'react';

const Reviews = () => {
  const reviewsData = [
    {
      name: 'John Doe',
      imageSrc: '/review.png',
      rating: 5,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam libero auctor tellus feugiat.'
    },
    {
      name: 'Jane Smith',
      imageSrc: '/review.png',
      rating: 4,
      description: 'Vivamus dapibus fermentum nunc, nec volutpat turpis tempor nec. Vestibulum scelerisque laoreet augue eget hendrerit.'
    },
    {
      name: 'David Johnson',
      imageSrc: '/review.png',
      rating: 3,
      description: 'Sed malesuada in libero ut facilisis. Phasellus id mauris et magna interdum interdum. Aenean eget odio quis libero accumsan vehicula.'
    },
    {
      name: 'Maria Garcia',
      imageSrc: '/review.png',
      rating: 5,
      description: 'Cras rhoncus odio a arcu vestibulum, et volutpat metus eleifend. Sed dignissim risus ut velit feugiat, sit amet cursus lorem bibendum.'
    },
    {
      name: 'Robert Wilson',
      imageSrc: '/review.png',
      rating: 4,
      description: 'Praesent euismod nunc at gravida. Suspendisse ut purus eget nunc lacinia congue eu a libero. In ultrices libero nec venenatis.'
    },
    {
      name: 'Emily Brown',
      imageSrc: '/review.png',
      rating: 5,
      description: 'Duis volutpat sollicitudin dolor, vel tincidunt ante. Integer consequat facilisis sem, at auctor quam interdum a. Duis eu justo eu purus.'
    },
  ];

  const renderStars = (rating: number) => {
    const ratingNumber = Number(rating);
  
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          width="16"
          height="16"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          fill={i < ratingNumber ? "yellow" : "none"}
          key={i}
        >
          <path
            d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z"
            fill="#FFCB45"
          />
        </svg>
      );
    }
    return stars;
  };
  
  return (
    <section className="bg-white py-14 mb-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-10 mt-4">Customer Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {reviewsData.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={review.imageSrc} alt={`${review.name}'s Photo`} className="w-12 h-12 rounded-full object-cover" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex items-center mt-1">{renderStars(review.rating)}</div>
                </div>
              </div>
              <p className="text-gray-600 mt-5">{review.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
