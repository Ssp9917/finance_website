import React from 'react'
import Process from './Process'

const Signup = () => {
  return (
    <>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex items-center">
          {/* Left side with text */}
          <div className="w-1/2 p-8">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Our Apex Credit Cards are like no other:
            </h2>
            <h3 className="text-2xl text-yellow-500 font-bold mb-4">
              Let’s find a Card best suited for you!
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Presenting Apex Credit Card range of credit cards which offer a host of exclusive benefits and a best-in-class rewards program. Choose a credit card to suit your lifestyle from an exclusive range of credit cards. Apply online for your credit card today.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Apex Credit Cards offer benefits that match your preferences, suit your lifestyle, and are accepted globally. The cards offer best-in-class privileges specially crafted to meet your status. The Credit Cards issued are EMV Chip and PIN enabled for enhanced security so that you can use them freely without any concerns.
            </p>
            <p className="text-lg text-gray-600">
              And there’s more, you earn delight points on all your spends using Apex Credit Card. These points can also be redeemed as cashback into your credit card account. Our range of four new Credit Cards offers an amazing array of benefits to give you the ultimate consumer experience.
            </p>
          </div>

          {/* Right side with form */}
          <div className="w-1/2 bg-gray-50 p-10 rounded-r-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Apply for an Apex Credit Card
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name (as per ID Proof)
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="text"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700">
                  Net Monthly Income
                </label>
                <input
                  id="income"
                  type="text"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your monthly income"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Create Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>
              <div className="flex items-start space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded text-yellow-500 focus:ring-2 focus:ring-yellow-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I have read the Terms & Conditions and agree to the terms therein *
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
              >
                PROCEED
              </button>
            </form>
          </div>
        </div>
      </div>

      <Process />
    </>
  )
}

export default Signup