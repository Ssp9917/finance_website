import React, { useContext, useEffect, useState } from "react";
import cardImage from "../../assets/creditCard.png";
import qrCodeImage from "../../assets/QrCode.jpeg";
import { UserAuthContext } from "../../context/UserAuthProvider";

const FinalStep = () => {
  const { user, applyCardUser, getApplyCardUser } = useContext(UserAuthContext);
  const [showQrModal, setShowQrModal] = useState(false);

  useEffect(() => {
    getApplyCardUser();
  }, [user]);

  const handleActivateClick = () => {
    setShowQrModal(true);
  };

  const closeModal = () => {
    setShowQrModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="w-full bg-white rounded-xl shadow-xl p-6 space-y-6">
        <div className="flex flex-wrap gap-5 md:gap-0 md:justify-between justify-center items-center">
          <div className="relative">
            <img
              src={cardImage}
              alt="Credit Card"
              className="w-full max-w-xs rounded-md shadow-md"
            />
            <div className="absolute bottom-5 left-10 text-white">
              {applyCardUser?.userId?.name}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Congratulations
            </h2>
            <p className="text-lg text-gray-700">
              Thankyou For Submitting <br />
              <span className="text-xl font-bold text-green-600">GST DONE</span>
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-justify">
          Congratulations sir your activation charges and insurance payment are
          updated. Your card CW coce is grated your card is ready for use after
          GST formalities. Our sales Ma er will call u soon for Further (10
          discussion.your physical care dispatches tomorrow.Company send you
          tracking ID of your card. Your card will be denvered in maximum one
          week 
          
          Thanks
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

export default FinalStep;
