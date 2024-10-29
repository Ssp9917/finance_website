import React from "react";
import { motion } from "framer-motion";
import cat from "../assets/cat.png";

const Categories = () => {
  const categories = [
    { name: "Best Credit Cards", icon: <i className="fa-solid fa-credit-card"></i> },
    { name: "Rewards", icon: <i className="fa-solid fa-gift"></i> },
    { name: "Travel", icon: <i className="fa-solid fa-plane"></i> },
    { name: "Fuel", icon: <i className="fa-solid fa-gas-pump"></i> },
    { name: "Cash Back", icon: <i className="fa-solid fa-money-bill"></i> },
    { name: "No Annual Fee", icon: <i className="fa-solid fa-indian-rupee-sign"></i> },
  ];

  return (
    <div className="container mx-auto p-8 mt-20">
      <h1 className="text-[45px] text-[#212529] text-center mb-4">
        Top Credit Card Categories
      </h1>
      <p className="text-center text-[17px] text-gray-600 font-light mb-8">
        As a leading credit card comparison website, we’ve partnered with all
        major credit
        <br /> card issuers in India. Select one of them below to get started
        now.
      </p>

      <div className="flex justify-around flex-wrap items-center">
        {/* Credit Card Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" "
        >
          <img src={cat} alt="Credit Cards" className="w-[400px] h-auto" />
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-[600px] grid grid-cols-2 gap-10"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card py-8 shadow-2xl rounded-lg text-center relative overflow-hidden bg-white text-[#590039]"
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <h2 className="text-2xl">{category.name}</h2>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;
