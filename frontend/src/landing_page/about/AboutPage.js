import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import Hero from './Hero';
import Team from './Team';

function AboutPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Team />
            <OpenAccount />
            <Footer />
        </div>
    );
}

export default AboutPage;
