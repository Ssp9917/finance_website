import React, { useContext, useEffect, useState } from "react";
import cardImage from "../../assets/creditCard.png";
import qrCodeImage from "../../assets/QrCode.jpeg";
import { UserAuthContext } from "../../context/UserAuthProvider";
import chip_img from '../../assets/chip_img.png'

const FirstStep = () => {
  const { user, applyCardUser, getApplyCardUser,admin } = useContext(UserAuthContext);
  const [showQrModal, setShowQrModal] = useState(false);


  const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL

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
          <div>
            <div
              className={`w-[300px] mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 shadow-lg flex flex-col justify-between text-white`}
            >
              {/* {/ Visa Logo /} */}
              <div className="flex justify-between items-start">
                <div className="text-lg font-bold">Eastern</div>
                <div className="text-lg font-bold">VISA</div>
              </div>

              {/* {/ Card Type /} */}
              <div className="text-sm font-semibold">Credit Card</div>

              {/* {/ Chip and Contactless Icon /} */}
              <div className="flex items-center space-x-4">
                <div className="">
                  <img src={chip_img} alt="" className="w-[60px] h-full" />
                </div>
              </div>

              {/* {/ Card Number /} */}
              <div className="tracking-wider text-xl font-semibold">
                9203 7834 4532 5867
              </div>

              {/* {/ Card Holder and Expiry /} */}
              <div className="flex justify-between items-center text-sm">
                <div>{applyCardUser?.userId?.name}</div>
                <div>VALID THRU 12/25</div>
              </div>
            </div>
          </div>

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

          <button
            onClick={handleActivateClick}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Activate Card
          </button>
        </div>

        <p className="text-gray-600 text-justify">
          Welcome to Apex Card credit card family, India's leading NBFC finance
          company with more than 2 lakh happy customers across India. Your
          credit card limit is 110000 with a return period of 60 days and low
          interest rates. For activation, please make a one-time card processing
          and delivery charge of 999 INR. You can use your virtual card after
          paying these charges, and your physical card will be delivered within
          3-5 working days. Please pay the activation charges via the company’s
          QR code shown below.
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
              Please pay the activation charge of 999 INR.
            </p>
            <img
              src={backendUrl+'/'+admin?.qrcode}
              alt="QR Code"
              className="w-32 h-32 mx-auto border border-gray-300 rounded-md shadow-md mb-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstStep;
