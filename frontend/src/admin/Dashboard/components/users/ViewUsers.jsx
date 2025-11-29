import React, { useContext, useEffect } from 'react';
import Dashboard from '../../Dashboard';
import { Link } from 'react-router-dom';
import './user.css';
import { AdminContext } from '../../../context/context';

const ViewUsers = () => {
  const { getAllUsers, users, deleteUser } = useContext(AdminContext);

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Dashboard>
      <div className='is-flex is-justify-content-end'>
        <Link
          to='/add-users'
          className='button px-6 is-success mb-6 has-text-white'>
          افزودن کاربر
        </Link>
      </div>
      <table
        className='table has-background-white'
        id='table1'>
        <thead>
          <tr>
            <th>شماره</th>
            <th>نام و نام خانوادگی</th>
            <th>ایمیل</th>
            <th>نقش</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.isAdmin ? 'مدیر' : 'نویسنده'}</td>
                <td>
                  <Link
                    state={user}
                    className='button is-info has-text-white'
                    to={`/edit-users/${user.id}`}>
                    ویرایش
                  </Link>
                </td>
                <td>
                  {user.isAdmin ? (
                    <button
                      className='button is-danger has-text-white'
                      disabled>
                      حذف نمیشود
                    </button>
                  ) : (
                    <button
                      className='button is-danger has-text-white'
                      onClick={() => deleteUser(user.id)}>
                      حذف
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Dashboard>
  );
};

export default ViewUsers;
