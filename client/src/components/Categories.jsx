import React from 'react';
import { motion } from 'framer-motion';
import cat from '../assets/cat.png';

const Categories = () => {
  const categories = [
    { name: 'Best Credit Cards', icon: '💳' },
    { name: 'Rewards', icon: '🎁' },
    { name: 'Travel', icon: '✈️' },
    { name: 'Fuel', icon: '⛽' },
    { name: 'Cash Back', icon: '💰', highlight: true },
    { name: 'No Annual Fee', icon: '₹' },
  ];

  return (
    <div className="container mx-auto p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4">
        Top Credit Card Categories
      </h1>
      <p className="text-center text-gray-600 mb-8">
        As a leading credit card comparison website, we’ve partnered with all
        major credit card issuers in India. Select one of them below to get
        started now.
      </p>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:space-x-8">
        {/* Credit Card Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 mt-8 lg:mt-0"
        >
          <img
            src={cat}
            alt="Credit Cards"
            className="mx-auto w-[250px] sm:w-[350px] lg:w-[400px] h-auto"
          />
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 shadow-lg rounded-lg text-center ${category.highlight ? 'bg-purple-700 text-white' : 'bg-white'
                } hover:scale-105 transform transition-all duration-300`}
            >
              <span className="text-3xl sm:text-4xl mb-2 block">{category.icon}</span>
              <h2 className="text-sm sm:text-lg font-bold">{category.name}</h2>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
