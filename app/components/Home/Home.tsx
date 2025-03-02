import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Features from './Features/Features'
import Services from './Services/Services'
import ClientsReview from './ClientsReview/ClientsReview'
import Team from './Team/Team'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Features />
            <Services />
            <ClientsReview />
            <Team />
        </div>
    )
}

export default Home