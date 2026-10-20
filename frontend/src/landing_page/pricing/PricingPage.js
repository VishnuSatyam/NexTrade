import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import Hero from './Hero';
import Brokerage from './Brokerage';

function PricingPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Brokerage />
            <OpenAccount />
            <Footer />
        </div>
    );
}

export default PricingPage;
