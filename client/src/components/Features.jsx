import React from 'react'
import { FaLock, FaGift, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';

const Features = () => {



  const features = [
    {
      title: 'Payment Security',
      description: 'A credit card is a digital instrument that offers you safety in payments.',
      icon: <FaLock />,
    },
    {
      title: 'Offers & Rewards',
      description: 'Credit card perks are the discounts and reward points on a range of products.',
      icon: <FaGift />,
    },
    {
      title: 'EMI Payments',
      description: 'Use credit cards for EMI payments to buy flagship items at affordable rates.',
      icon: <FaCreditCard />,
    },
    {
      title: 'Cash Withdrawal',
      description: 'Withdraw advance cash from ATMs with the ability to repay when settling the bill.',
      icon: <FaMoneyBillWave />,
    },
  ];

  const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center">
      <div className="bg-white w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
        <div className="text-3xl text-purple-700">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Credit Card Features</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features