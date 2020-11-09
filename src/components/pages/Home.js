import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import LandingSection from '../LandingSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <LandingSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;