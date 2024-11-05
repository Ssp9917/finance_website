import React, { useContext } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import appex_logo from '../assets/card_logo.png'
import { UserAuthContext } from '../context/UserAuthProvider';

const Footer = () => {

  const {admin} = useContext(UserAuthContext)

  console.log(admin)

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={appex_logo}
              alt="Apex Card Logo"
              className="w-32 mb-4"
            />
            <p className="text-center md:text-left text-sm">
              Apex Card credit card is a leading and awarded financial establishment in providing metal credit card services. We provide reliable services for our visitors.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700">
                <FaInstagram />
              </a>
              <a href="#" className="bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700">
                <FaLinkedinIn />
              </a>
              <a href="#" className="bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700">
                <FaGoogle />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-700">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-700">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-700">Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-700">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-700">Terms and Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
            <p className="text-sm">3/51 Apex Card House, 24 Kasturba Road, Ashok Nagar, Bengaluru, Karnataka 560001</p>
            <p className="mt-2 text-sm"><strong>Phone:</strong> +91 {admin?.footerNo}</p>
            <p className="mt-2 text-sm"><strong>Email:</strong> {admin?.footerEmail}</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-gray-600 border-t pt-6">
          © Copyright Apex Card Credit Cards | All Rights Reserved. 
          <a href="#" className="text-purple-600 hover:text-purple-700 ml-2">Privacy Policies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
