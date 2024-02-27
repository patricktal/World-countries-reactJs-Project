import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Countries from '../components/Countries';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div >
            <Logo />
            <Navigation />
            <Countries />
            <Footer />
        </div>
    );
};

export default Home;