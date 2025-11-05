import React from 'react';
import './main.css';
import Dashboard from '../../Dashboard';

const Main = () => {
  return (
    <Dashboard>
      <h1 className='is-size-3'> سلام , به پنل آدمین خوش آمدی</h1>
      <h3 className='is-size-5 mt-5'> امیدوارم خبر های خوبی داشته باشی</h3>
    </Dashboard>
  );
};

export default Main;
