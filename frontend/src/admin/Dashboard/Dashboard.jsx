import React, { useContext } from 'react';
import { AdminContext } from '../context/context';
import Sidebar from './components/sidebar/Sidebar';
import Information from './components/information/Information';
import './index.css';

const Dashboard = () => {
  const { getAllUsers } = useContext(AdminContext);

  return (
    <div className='dashboard-wrapper'>
      <Sidebar />
      <div className='main-info'>
        <Information />
        <div className='main'>
          <h1 className='is-size-3'> سلام , به پنل آدمین خوش آمدی</h1>
          <h3 className='is-size-5 mt-5'> امیدوارم خبر های خوبی داشته باشی</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
