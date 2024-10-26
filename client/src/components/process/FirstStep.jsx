import React from "react";
import cardImage from "../../assets/creditCard.png";
import qrCodeImage from "../../assets/QrCode.jpeg";
const FirstStep = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className=" w-full bg-white rounded-xl shadow-xl p-6 space-y-6">
        <div className="flex flex-wrap gap-5 md:gap-0 md:justify-between justify-center items-center">
          <img
            src={cardImage}
            alt="Credit Card"
            className="w-full max-w-xs rounded-md shadow-md"
          />
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Congratulations
            </h2>
            <p className="text-lg text-gray-700">
              Your Credit Card Limit <br />
              <span className="text-3xl font-bold text-green-600">
                110000 INR
              </span>
            </p>
          </div>
          <img
            src={qrCodeImage}
            alt="QR Code"
            className="w-32 h-32 border border-gray-300 rounded-md shadow-md"
          />
        </div>

        <p className="text-gray-600 text-justify">
          Welcome to Apex Card credit card family India's leading NBFC finance
          company with more than 2 lakh happy customer in all over India.Your
          credit card limit is 110000 with a return period of 60 days with low
          interest rates.For your card activation plz make a one time card
          making delivery and processing charges 999 INR.You can use your
          vartual card after paying these charges and than make card insurance
          and use your card. Physical card will be delivered in 3 to 5 working
          days.Plz pay activation charges on companies QR code shown below down
          and your card will be ready to use.
        </p>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">
            Benefits Of Card
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Get 2 instant 2000 INR shopping vouchers</li>
            <li>Get 2 instant 1000 INR shopping vouchers</li>
            <li>
              2.5% fuel discount cashback on HP petrol pumps all over India
            </li>
            <li>2.5% annual fees and lifetime free</li>
            <li>110000 cash withdrawal limit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
