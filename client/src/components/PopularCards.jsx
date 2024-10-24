import React from 'react';
import siv1 from '../assets/siv1.png';
import gold1 from '../assets/gold1.png';
import pla1 from '../assets/pla1.png';
import me1 from '../assets/me1.png';

// Array of card details
const cardData = [
  {
    title: 'Silver Credit Card',
    description: 'No annual fee shall be charged on spend of Rs 30000 or more in a membership year (a year from the date of issuance of the card), else fee of Rs 1,000 will be charged at the end of the said year. Rs 1600, Rs 950 and Rs 1100 on spending Rs 5000, Rs 6000 and Rs 14000 every month on Fuel, Grocery and other categories respectively.',
    imageUrl: siv1, // Use the imported image variable
  },
  {
    title: 'Gold Credit Card',
    description: 'Enjoy an extended interest-free credit period for the first 90 days post credit card issuance by paying only the minimum amount due. Convert your transactions into EMIs at a special interest rate of 0.99% per month at no processing fees.',
    imageUrl: gold1, // Use the imported image variable
  },
  {
    title: 'Metal Credit Card',
    description: 'No annual fee shall be charged on spend of Rs 30000 or more in a membership year else fee of Rs 1,000 will be charged at the end of the said year. Rs 1600, Rs 950 and Rs 1100 on spending Rs 5000, Rs 6000 and Rs 14000 every month on Fuel, Grocery and other categories respectively.',
    imageUrl: me1, // Use the imported image variable
  },
  {
    title: 'Platinum Credit Card',
    description: 'Get 2%* cashback on all your online spends, up to a maximum of Rs 1000 per month. Get 1%* cashback on your other spends, up to a maximum of Rs 500 per month. Fuel transactions are not eligible for cashback.',
    imageUrl: pla1, // Use the imported image variable
  },
];

// Card component
const Card = ({ card }) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
    <img src={card.imageUrl} alt={`${card.title} Credit Card`} className="w-full mb-4 rounded-lg" />
    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
    <p className="text-sm text-gray-600 mb-4 flex-grow">{card.description}</p>
    <button className="mt-auto bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">Apply Card</button>
  </div>
);

const PopularCards = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold">Most Popular Credit Cards</h1>
          <p className="text-gray-600">Do you want to know which of the credit cards are the most popular? Why not take a look and see how they stack up against each other.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCards;
