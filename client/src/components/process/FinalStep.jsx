import React, { useContext, useEffect, useState } from "react";
import cardImage from "../../assets/creditCard.png";
import qrCodeImage from "../../assets/QrCode.jpeg";
import { UserAuthContext } from "../../context/UserAuthProvider";
import chip_img from '../../assets/chip_img.png'

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
