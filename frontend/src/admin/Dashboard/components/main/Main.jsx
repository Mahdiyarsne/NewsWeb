import React, { useContext } from 'react';
import './main.css';
import Dashboard from '../../Dashboard';
import { AdminContext } from '../../../context/context';

const Main = () => {
  const { profileName } = useContext(AdminContext);
  return (
    <Dashboard>
      <h1 className='font'> سلام {profileName}, به پنل آدمین خوش آمدی</h1>
      <h3 className='font'> امیدوارم خبر های خوبی داشته باشی</h3>
    </Dashboard>
  );
};

export default Main;
