import React, { useContext, useState } from 'react';
import Process from './Process';
import { UserAuthContext } from '../context/UserAuthProvider';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    income: '',
    city: '',
    password: '',
    terms: false,
  });

  const { signup, setUser } = useContext(UserAuthContext);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
    if (!formData.income) newErrors.income = 'Income is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.terms) newErrors.terms = 'You must agree to the terms';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const response = await signup(formData);
      setUser(response);
      navigate('/user-details');

      swal({
        title: 'Account Created!',
        text: 'Your account has been created successfully.',
        icon: 'success',
        buttons: false,
        timer: 2000,
      });

      setFormData({
        name: '',
        mobile: '',
        income: '',
        city: '',
        password: '',
        terms: false,
      });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row items-center w-full max-w-4xl">
          {/* Left side with text */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
              Our Apex Credit Cards are like no other:
            </h2>
            <h3 className="text-xl sm:text-2xl text-yellow-500 font-bold mb-4">
              Let’s find a Card best suited for you!
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6">
              Presenting Apex Credit Card range of credit cards which offer a host of exclusive benefits and a best-in-class rewards program. Choose a credit card to suit your lifestyle from an exclusive range of credit cards. Apply online for your credit card today.
            </p>
          </div>

          {/* Right side with form */}
          <div className="w-full md:w-1/2 bg-gray-50 p-6 sm:p-10 rounded-r-xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Apply for an Apex Credit Card
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name (as per ID Proof)
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="text"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your mobile number"
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
              </div>
              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700">
                  Net Monthly Income
                </label>
                <input
                  id="income"
                  type="text"
                  value={formData.income}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your monthly income"
                />
                {errors.income && <p className="text-red-500 text-sm">{errors.income}</p>}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your city"
                />
                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Create Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Create a password"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>
              <div className="flex items-start space-x-2">
                <input
                  id="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 rounded text-yellow-500 focus:ring-2 focus:ring-yellow-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I have read the Terms & Conditions and agree to the terms therein *
                </label>
              </div>
              {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}
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
  );
};

export default Signup;
