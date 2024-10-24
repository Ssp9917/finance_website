import React from 'react';
import Slider from 'react-slick'; // Import Slider
import case1 from '../assets/case1.jpg';
import case2 from '../assets/case2.png';
import case3 from '../assets/case3.jpg';
import case4 from '../assets/case4.webp';
import case5 from '../assets/case5.jpg';
import case7 from '../assets/case7.jpg';

const Offers = () => {
  const cashbackData = [
    {
      image: case3,
      percentage: '5% Cashback',
      description: 'Monthly up to 10,000 cashback expect all petrol pump every transaction.',
    },
    {
      image: case3,
      percentage: '5% Cashback',
      description: 'Monthly up to 10,000 cashback expect all petrol pump every transaction.',
    },
    {
      image: case3,
      percentage: '5% Cashback',
      description: 'Monthly up to 10,000 cashback expect all petrol pump every transaction.',
    },
    {
      image: case4,
      percentage: '10% Cashback',
      description: 'Amazon, Flipkart, Myntra, eBay all shopping platforms, 10% cashback every purchase.',
    },
    {
      image: case5,
      percentage: '10% Cashback',
      description: 'Gas, Electricity, Mobile, Internet, Water, Insurance Premiums, every payment transaction.',
    },
    {
      image: case7,
      percentage: '10% Cashback',
      description: 'Swiggy, Zomato, Uber Eats, Domino’s, etc. Every transaction 20% Cashback.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto">
        <Slider {...settings}>
          {cashbackData.map((item, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <img src={item.image} alt={item.percentage} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.percentage}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Offers;
