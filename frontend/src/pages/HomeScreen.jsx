import React from 'react';
import TopMenu from '../components/Home/TopMenu/TopMenu';
import Navbar from '../components/Home/Nabar/Navbar';
import HomeWrapper from '../components/Home/Home-wrapper/HomeWrapper';
import WhatsNews from '../components/Home/WhatsNews/WhatsNews';
import PopularNews from '../components/Home/Popular/PopularNews';

const HomeScreen = () => {
  return (
    <div className='wrapper'>
      <TopMenu />
      <Navbar />
      <HomeWrapper />
      <WhatsNews />
      <PopularNews />
    </div>
  );
};

export default HomeScreen;
