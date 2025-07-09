import React from 'react'
import Navbar from '../components/Navbar'
import WebDesignHero from '../components/WebDesignHero'
import ShowStoppingWebsites from '../components/ShowWebsite'
import WebDesignProcess from '../components/WebDesignProcess'
import AgencyValues from '../components/AgencyValues'
import AboutCards from '../components/AboutCards'
import PublishingSection from "../components/PublishingSection"
import Cards from "../components/Cards"
import Testnamnials from "../components/Testnamnials"
import Footer from "../components/Footer";
import Hero from '../components/HeroSection'

const page = () => {
    return (
        <div>
            <Navbar />
            <WebDesignHero />
            <ShowStoppingWebsites />
            <WebDesignProcess />
            <AgencyValues />
            <AboutCards />
            <PublishingSection />
            <Cards />
            <Testnamnials />
            <Hero/>
            <Footer />
        </div>
    )
}

export default page