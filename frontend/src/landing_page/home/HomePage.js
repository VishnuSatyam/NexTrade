import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';


import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Awards />
            <Education />
            <Pricing />
            <Stats />
            <OpenAccount />
            <Footer />
        </div>
    );
}

export default HomePage;