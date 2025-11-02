import React, { useContext } from 'react';
import { AdminContext } from '../context/context';

const Dashboard = () => {
  const { getAllUsers } = useContext(AdminContext);

  return (
    <>
      <div>Dashboard</div>
      <button onClick={getAllUsers}>کاربران</button>
    </>
  );
};

export default Dashboard;
