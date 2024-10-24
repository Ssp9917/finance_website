import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const CreditCardSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const sliderData = [
    {
      image: "/path-to-image/slider-image1.jpg",
      title: "Swipe, Save, and Earn with Our Exclusive Credit Card Offers",
      buttonText: "Apply Now",
    },
    {
      image: "/path-to-image/slider-image2.jpg",
      title: "Get Rewards on Every Purchase",
      buttonText: "Get Your Card",
    },
    {
      image: "/path-to-image/slider-image3.jpg",
      title: "Exclusive Cashback Offers for Every Transaction",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="w-full relative">
      <Slider {...sliderSettings}>
        {sliderData.map((slide, index) => (
          <div key={index} className="flex items-center justify-between bg-purple-700 p-8">
            <div className="w-1/2">
              <img src={slide.image} alt="Credit Card" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="w-1/2 text-white p-8">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CreditCardSlider