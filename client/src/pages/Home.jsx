import React from 'react'
import PopularCards from '../components/PopularCards'
import Process from '../components/Process'
import Services from '../components/Services'
import Features from '../components/Features'
import Faq from '../components/Faq'
import Slider from '../components/CreditCardSlider'
import Categories from '../components/Categories'
import Offers from '../components/Offers'
import Countdown from '../components/Countdown'
import CreditCardSlider from '../components/CreditCardSlider'

const Home = () => {
  return (
    <>
      <CreditCardSlider />
      <Categories />
      <PopularCards />
      <Countdown />
      {/* <Offers /> */}
      <Services />
      <Features />
      <Faq />
      <Process />
    </>
  )
}

export default Home