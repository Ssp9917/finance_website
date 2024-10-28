import React, { useState } from 'react';
import faqImage from '../assets/faq.png';

const faqs = [
  {
    question: 'What is Cash limit?',
    answer: 'The cash limit on your credit card is the maximum amount of cash you can withdraw using the card.',
  },
  {
    question: 'What are the benefits of a credit card?',
    answer: 'Credit cards provide benefits such as rewards points, cashback, travel benefits, and more.',
  },
  {
    question: 'What is Cash limit?',
    answer: 'The cash limit allows you to withdraw cash from ATMs using your credit card.',
  },
  {
    question: 'What is a credit card?',
    answer: 'A credit card is a payment card that allows you to borrow funds from a bank to make purchases.',
  },
];

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Apex Card Credit Card FAQ's</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left: Image */}
        <div className="flex-1 max-w-md">
          <img src={faqImage} alt="FAQ Illustration" className="w-full h-auto custom-bounce" />
        </div>

        {/* Right: FAQ Section */}
        <div className="w-[350px]">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left bg-purple-200 p-4 rounded-lg shadow-md focus:outline-none"
              >
                <div className="flex justify-between items-center">

                  <span>{faq.question}</span>
                  <span>{selected === index ? '-' : '+'}</span>
                </div>
              </button>
             
              {selected === index && (
                <div className="mt-2 bg-gray-100 p-4 rounded-lg flex justify-between items-center">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
