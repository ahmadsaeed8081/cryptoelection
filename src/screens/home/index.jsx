import React from 'react';
import Hero from '../../components/hero';
import Vision from '../../components/vision';
import Brands from '../../components/Brands';
import Footer from '../../components/footer';
import Team from '../../components/Team';
import FAQ from '../../components/FAQ';
import Tokenomics from '../../components/tokenomics';
import RoadMap from '../../components/RoadMap';
import BuyCrypto from '../../components/BuyCrypto';
const Home = () => {
  return (
    <div className=' tw-overflow-x-hidden'>
      <Hero />
    <div className=' tw-overflow-x-hidden'>
    <Brands/>
    </div>
      <Vision />
      <Tokenomics/>
      <BuyCrypto/>
      <RoadMap/>
      <Team/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;