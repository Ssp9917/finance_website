import React from 'react';

const Offers = () => {
  const cashbackData = [
    {
      image: '/path-to-image/petrol-diesel.png', // Replace with your image path
      percentage: '5% Cashback',
      description: 'Monthly up to 10,000 cashback expect all petrol pump every transaction.',
    },
    {
      image: '/path-to-image/online-shopping.png', // Replace with your image path
      percentage: '10% Cashback',
      description: 'Amazon, Flipkart, Myntra, eBay all shopping platforms, 10% cashback every purchase.',
    },
    {
      image: '/path-to-image/bill-payments.png', // Replace with your image path
      percentage: '10% Cashback',
      description: 'Gas, Electricity, Mobile, Internet, Water, Insurance Premiums, every payment transaction.',
    },
    {
      image: '/path-to-image/food-delivery.png', // Replace with your image path
      percentage: '10% Cashback',
      description: 'Swiggy, Zomato, Uber Eats, Domino’s, etc. Every transaction 20% Cashback.',
    },
  ];

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cashbackData.map((item, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={item.image} alt={item.percentage} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.percentage}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
