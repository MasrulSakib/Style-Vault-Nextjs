'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Features from './Features/Features'
import Services from './Services/Services'
import ClientsReview from './ClientsReview/ClientsReview'
import Team from './Team/Team'
import Pricing from './Pricing/Pricing'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        const initAOS = async () => {
            await import("aos");
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: 'top-bottom'
            });
        }
        initAOS();
    }, [])

    return (
        <div>
            <Hero />
            <About />
            <Features />
            <Services />
            <ClientsReview />
            <Team />
            <Pricing />
        </div>
    )
}

export default Home