import React from 'react'
import { FaLock, FaGift, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';

const Features = () => {



  const features = [
    {
      title: 'Payment Security',
      description: 'A credit card is a digital instrument that offers you safety in payments. With multi-factor authentication and in-hand security features, you needn��t have cause to be concerned.',
      icon: <FaLock />,
    },
    {
      title: 'Offers & Rewards',
      description: 'Credit card perks are the discounts and offers you can avail of on a range of products.you get reward points on the basis of your spending and the kind of credit card you use.',
      icon: <FaGift />,
    },
    {
      title: 'EMI Payments',
      description: 'Among a distinct credit card advantage is the fact that a credit card can be used for buying flagship items at affordable EMIs. These can be repaid over a duration you can select.',
      icon: <FaCreditCard />,
    },
    {
      title: 'Cash Withdrawal',
      description: 'Another advantage of a credit card over a debit card is that you can also withdraw advance cash from ATMs with the facility of repaying amounts when you have to settle your bill.',
      icon: <FaMoneyBillWave />,
    },
  ];

  const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card bg-white shadow-md p-6 rounded-lg text-center relative">
      <div className="bg-white w-28 h-28 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
        <div className="text-5xl text-[#590039]">{icon}</div>
      </div>
      <h3 className="text-[23px] text-[#212529] mb-2">{title}</h3>
      <p className=" text-[#212529] font-light">{description}</p>
    </div>
  );
};

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-5xl text-center mb-8">Credit Card Features</h2>
      <div className="px-4">
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