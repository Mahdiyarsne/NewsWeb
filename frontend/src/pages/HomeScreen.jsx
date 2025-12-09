import React from 'react';
import TopMenu from '../components/Home/TopMenu/TopMenu';
import Navbar from '../components/Home/Nabar/Navbar';
import HomeWrapper from '../components/Home/Home-wrapper/HomeWrapper';

const HomeScreen = () => {
  return (
    <div className='wrapper'>
      <TopMenu />
      <Navbar />
      <HomeWrapper />
    </div>
  );
};

export default HomeScreen;
