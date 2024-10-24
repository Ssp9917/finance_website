import React from 'react'
import Process from './Process'

const Login = () => {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center p-6">
        <div className="m bg-white rounded-xl shadow-lg overflow-hidden flex items-center">
          {/* Left side with text */}
          <div className="w-1/2 p-8">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Are you struggling with low CIBIL score?
            </h2>
            <p className="text-lg text-gray-600">
              We are a professional credit card service provider. Get assured up to <span className="font-bold">₹80,000</span> credit limit and cash limit with a low CIBIL or credit score. Get <span className="font-bold">2% cashback</span> on your HP petrol pump transactions.
            </p>
          </div>

          {/* Right side with form */}
          <div className="w-1/2 bg-gray-50 p-10 rounded-r-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Login for an Apex Card Credit Card
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="text"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition duration-300"
              >
                LOGIN
              </button>
              <div className="text-right">
                <a href="#" className="text-purple-600 hover:underline text-sm font-medium">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>


      <Process />
    </>
  )
}

export default Login