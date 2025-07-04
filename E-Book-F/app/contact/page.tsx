import React from 'react'
import Navbar from '../components/Navbar'
import ContactPage1 from "../components/ContactPage1"
import TestLastForm from "../components/LastForm"
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <ContactPage1/>
        <TestLastForm/>
        <Footer/>
    </div>
  )
}

export default page