import React, { useContext, useState } from 'react';
import Process from './Process';
import { UserAuthContext } from '../context/UserAuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, setUser } = useContext(UserAuthContext);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Reset error message
    setError('');

    // Validate inputs
    if (!mobile || !password) {
      setError('Please fill in all fields.'); // Set error if any field is empty
      return; // Exit the function
    }

    setLoading(true); // Set loading to true

    try {
      // Make an API call
      const response = await login({ mobile, password });
      console.log(response);
      setUser(response);
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/');
      swal({
        title: "Login Successfully!",
        text: "Login successfully.",
        icon: "success",
        buttons: false,
        timer: 2000,
      });

    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Login Error:', error);
    } finally {
      setLoading(false); // Reset loading status
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center p-4 sm:p-6 md:p-6 ">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row items-center w-full max-w-6xl">
          {/* Left side with text */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
              Are you struggling with low CIBIL score?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              We are a professional credit card service provider. Get assured up to <span className="font-bold">₹80,000</span> credit limit and cash limit with a low CIBIL or credit score. Get <span className="font-bold">2% cashback</span> on your HP petrol pump transactions.
            </p>
          </div>

          {/* Right side with form */}
          <div className="w-full lg:w-1/2 bg-gray-50 p-6 sm:p-10 rounded-r-xl shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Login for an Apex Card Credit Card
            </h3>
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="text"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)} // Update state on change
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update state on change
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 ${loading ? 'bg-gray-400' : 'bg-purple-700'} text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition duration-300`}
                disabled={loading} // Disable button while loading
              >
                {loading ? 'Logging in...' : 'LOGIN'} {/* Change button text based on loading state */}
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
  );
};

export default Login;
