import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import Hero from './Hero';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';

function Universe() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Leftsection />
            <Rightsection />
            <OpenAccount />
            <Footer />
        </div>
    );
}

export default Universe;
