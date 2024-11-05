import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from '../assets/b4.png'
import b2 from '../assets/b5.png'
import b3 from '../assets/b6.png'


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
      image:b1,
    },
    {
      image: b2,
    },
    {
      image: b3,
    },
  ];

  return (
    <div className="w-full relative">
      <Slider {...sliderSettings}>
        {sliderData.map((slide, index) => (
         <div>
          <img src={slide.image} alt="" className='-mt-3' />
         </div>
        ))}
      </Slider>
    </div>
  );
}

export default CreditCardSlider