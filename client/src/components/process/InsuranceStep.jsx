import React, { useContext, useEffect, useState } from "react";
import cardImage from "../../assets/creditCard.png";
import qrCodeImage from "../../assets/QrCode.jpeg";
import { UserAuthContext } from "../../context/UserAuthProvider";

const InsuranceStep = () => {
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
              Your Credit Card is activated <br />
              <span className="text-3xl font-bold text-green-600">
                110000 INR
              </span>
            </p>
          </div>

          <button
            onClick={handleActivateClick}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Activate Card
          </button>
        </div>

        <p className="text-gray-600 text-justify">
          Hello sir for using your card limit please make your credit card
          insurance for 2650 INR QR code shown below down and enjoy your limit.
          T&C - If your insurance amount is not done in 6 hours of card
          activation your card will be in pending mode.
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

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-xs w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Card Activation
            </h3>
            <p className="text-gray-700 mb-4">
              Please pay the activation charge of 2650 INR.
            </p>
            <img
              src={qrCodeImage}
              alt="QR Code"
              className="w-32 h-32 mx-auto border border-gray-300 rounded-md shadow-md mb-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InsuranceStep;
