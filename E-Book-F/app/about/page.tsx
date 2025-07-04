import React from 'react'
import Navbar from '../components/Navbar'
import AboutWelcome from '../components/AboutWelcome'
import AgencyValues from '../components/AgencyValues'
import AboutCards from '../components/AboutCards'
import AboutButtons from '../components/AboutButtons'
import AboutDelivirng from "../components/AboutDelivring"
import PublishingSection from "../components/PublishingSection"
import Cards from "../components/Cards"
import ChoseProffesional from '../components/ChoseProffesional'
import Testnamnials from "../components/Testnamnials"
import LastForm from "../components/LastForm"
import Footer from '../components/Footer'

const about = () => {
  return (
    <div>
      <Navbar/>
      <AboutWelcome/>
      <AgencyValues/>
      <AboutCards/>
      <AboutButtons/>
      <AboutDelivirng/>
      <PublishingSection/>
      <ChoseProffesional/>
      <Cards/>
      <Testnamnials/>
      <LastForm/>
      <Footer/>
    </div>
  )
}

export default about