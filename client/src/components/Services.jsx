import React from 'react'

// Sample images (Replace these with actual image URLs or imports)
import paytmLogo from '../assets/paytm.png';
import phonePeLogo from '../assets/phonepay.jpg';
import googlePayLogo from '../assets/gPay.webp';
import swiggyLogo from '../assets/swiggi.png';
import zomatoLogo from '../assets/zomato.jpg';
import flipkartLogo from '../assets/flipcart.png';
import amazonLogo from '../assets/amazon.jpg';
import mobileRechargeLogo from '../assets/recharg.png';
import dthLogo from '../assets/dth.png';
import electricityLogo from '../assets/electorcity.avif';
import broadbandLogo from '../assets/broadband.jpg';
import waterLogo from '../assets/water.png';



const Services = () => {

  const services = [
    { name: 'Paytm', logo: paytmLogo },
    { name: 'Phone Pay', logo: phonePeLogo },
    { name: 'Google Pay', logo: googlePayLogo },
    { name: 'Swiggy', logo: swiggyLogo },
    { name: 'Zomato', logo: zomatoLogo },
    { name: 'Flipkart', logo: flipkartLogo },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'Mobile Recharge', logo: mobileRechargeLogo },
    { name: 'DTH Recharge', logo: dthLogo },
    { name: 'Electricity', logo: electricityLogo },
    { name: 'Broadband Payment', logo: broadbandLogo },
    { name: 'Water', logo: waterLogo },
  ];


  const ServiceItem = ({ name, logo }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="bg-white shadow-md rounded-full p-4 mb-2">
          <img src={logo} alt={name} className="h-16 w-16 object-contain" />
        </div>
        <p className="text-gray-700 text-sm font-medium">{name}</p>
      </div>
    );
  };

  return (
    <div className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Service Types</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services