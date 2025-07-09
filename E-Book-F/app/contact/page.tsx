import React from 'react'
import Navbar from '../components/Navbar'
import ContactPage1 from "../components/ContactPage1"
import Footer from '../components/Footer'
import Hero from '../components/HeroSection'

const page = () => {
  return (
    <div>
        <Navbar/>
        <ContactPage1/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default page