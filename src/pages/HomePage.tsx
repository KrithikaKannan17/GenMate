import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default HomePage;