import React from 'react'
import PopularCards from '../components/PopularCards'
import Process from '../components/Process'
import Services from '../components/Services'
import Features from '../components/Features'
import Faq from '../components/Faq'

const Home = () => {
  return (
    <>
        <PopularCards/>
        <Services/>
        <Features/>
        <Faq/>
        <Process/>
    </>
  )
}

export default Home