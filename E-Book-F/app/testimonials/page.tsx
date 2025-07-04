import React from 'react'
import Navbar from '../components/Navbar'
import AboutWelcome from '../components/ClientAbout'
import NewTestnamnials from "../components/Testnamnials"
import TestLastForm from "../components/LastForm"
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
        <AboutWelcome/>
        <NewTestnamnials/>
        <TestLastForm/>
        <Footer/> 
    </div>
  )
}

export default page