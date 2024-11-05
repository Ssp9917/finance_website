import React from 'react';
import siv1 from '../assets/siv1.png';
import gold1 from '../assets/gold1.png';
import pla1 from '../assets/pla1.png';
import me1 from '../assets/me1.png';
import chip_img from '../assets/chip_img.png'

// Array of card details with unique background colors, names, and card numbers
const cardData = [
  {
    title: 'Silver Credit Card',
    description: 'No annual fee shall be charged on spend of Rs 30000 or more in a membership year (a year from the date of issuance of the card), else fee of Rs 1,000 will be charged at the end of the said year. Rs 1600, Rs 950 and Rs 1100 on spending Rs 5000, Rs 6000 and Rs 14000 every month on Fuel, Grocery and other categories respectively.',
    imageUrl: siv1,
    backgroundColor: 'from-gray-300 to-gray-500',
    cardHolder: 'Rahul Sharma',
    cardNumber: '1234 5678 9012 3456',
  },
  {
    title: 'Gold Credit Card',
    description: 'Enjoy an extended interest-free credit period for the first 90 days post credit card issuance by paying only the minimum amount due. Convert your transactions into EMIs at a special interest rate of 0.99% per month at no processing fees.',
    imageUrl: gold1,
    backgroundColor: 'from-yellow-400 to-orange-500',
    cardHolder: 'Abhishek Gupta',
    cardNumber: '2345 6489 6340 7324',
  },
  {
    title: 'Metal Credit Card',
    description: 'No annual fee shall be charged on spend of Rs 30000 or more in a membership year else fee of Rs 1,000 will be charged at the end of the said year. Rs 1600, Rs 950 and Rs 1100 on spending Rs 5000, Rs 6000 and Rs 14000 every month on Fuel, Grocery and other categories respectively.',
    imageUrl: me1,
    backgroundColor: 'from-gray-800 to-black',
    cardHolder: 'Priya Singh',
    cardNumber: '9876 5432 1098 7654',
  },
  {
    title: 'Platinum Credit Card',
    description: 'Get 2% cashback on all your online spends, up to a maximum of Rs 1000 per month. Get 1% cashback on your other spends, up to a maximum of Rs 500 per month. Fuel transactions are not eligible for cashback.',
    imageUrl: pla1,
    backgroundColor: 'from-blue-400 to-blue-600',
    cardHolder: 'Anil Kumar',
    cardNumber: '4567 8901 2345 6789',
  },
];

// Card component
const Card = ({ card }) => (
  <div className="bg-white shadow-md rounded-lg p-2 flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-xl group">
    <div>
      <div className={`w-full mb-2 bg-gradient-to-r ${card.backgroundColor} rounded-xl p-4 shadow-lg flex flex-col justify-between text-white`}>
        {/* {/ Visa Logo /} */}
        <div className="flex justify-between items-start">
          <div className="text-lg font-bold">Eastern</div>
          <div className="text-lg font-bold">VISA</div>
        </div>

        {/* {/ Card Type /} */}
        <div className="text-sm font-semibold">{card.title}</div>

        {/* {/ Chip and Contactless Icon /} */}
        <div className="flex items-center space-x-4">
          <div className="">
            <img src={chip_img} alt="" className='w-[60px] h-full' />
          </div>
          
        </div>

        {/* {/ Card Number /} */}
        <div className="tracking-wider text-xl font-semibold">
          {card.cardNumber}
        </div>

        {/* {/ Card Holder and Expiry /} */}
        <div className="flex justify-between items-center text-sm">
          <div>{card.cardHolder}</div>
          <div>VALID THRU 12/25</div>
        </div>
      </div>
    </div>

    <h3 className="text-md sm:text-lg font-semibold mb-2">{card.title}</h3>
    <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">{card.description}</p>
    <button className="mt-auto bg-purple-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-purple-700 group-hover:bg-purple-800">
      Apply Card
    </button>
  </div>
);

const PopularCards = () => {
  return (
    <section className="py-8 sm:py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold">Most Popular Credit Cards</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">Do you want to know which of the credit cards are the most popular? Why not take a look and see how they stack up against each other.</p>
        </div>

        {/* {/ Cards /} */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {cardData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCards;
