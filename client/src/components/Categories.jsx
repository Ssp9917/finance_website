import React from 'react'
import { motion } from "framer-motion";
import cat from '../assets/cat.png'

const Categories = () => {



  const categories = [
    { name: "Best Credit Cards", icon: "💳" },
    { name: "Rewards", icon: "🎁" },
    { name: "Travel", icon: "✈️" },
    { name: "Fuel", icon: "⛽" },
    { name: "Cash Back", icon: "💰", highlight: true },
    { name: "No Annual Fee", icon: "₹" },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-4">
        Top Credit Card Categories
      </h1>
      <p className="text-center text-gray-600 mb-8">
        As a leading credit card comparison website, we’ve partnered with all
        major credit card issuers in India. Select one of them below to get
        started now.
      </p>

      <div className="flex justify-between items-center">
        {/* Credit Card Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-1/2"
        >
          <img
            src={cat}
            alt="Credit Cards"
            className="w-[400px] h-auto"
          />
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-1/2 grid grid-cols-2 gap-4"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 shadow-lg rounded-lg text-center ${category.highlight ? "bg-purple-700 text-white" : "bg-white"
                } hover:scale-105 transform transition-all duration-300`}
            >
              <span className="text-4xl mb-2 block">{category.icon}</span>
              <h2 className="text-lg font-bold">{category.name}</h2>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Categories