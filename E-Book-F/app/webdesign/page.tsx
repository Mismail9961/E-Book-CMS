import React from 'react'
import Navbar from '../components/Navbar'
import WebDesignHero from '../components/WebDesignHero'
import ShowStoppingWebsites from '../components/ShowWebsite'
import WebDesignProcess from '../components/WebDesignProcess'
import AgencyValues from '../components/AgencyValues'
import AboutCards from '../components/AboutCards'
import PublishingSection from "../components/PublishingSection"
import ChoseProffesional from "../components/ChoseProffesional";
import Cards from "../components/Cards"
import Testnamnials from "../components/Testnamnials"
import LastForm from "../components/LastForm"
import Footer from "../components/Footer";

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
            <ChoseProffesional />
            <Cards />
            <Testnamnials />
            <LastForm />
            <Footer />
        </div>
    )
}

export default page