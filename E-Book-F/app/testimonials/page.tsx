import React from 'react'
import Navbar from '../components/Navbar'
import AboutWelcome from '../components/ClientAbout'
import NewTestnamnials from "../components/Testnamnials"
import Footer from '../components/Footer'
import Hero from '../components/HeroSection'

const page = () => {
  return (
    <div>
        <Navbar/>
        <AboutWelcome/>
        <NewTestnamnials/>
        <Hero/>
        <Footer/> 
    </div>
  )
}

export default page