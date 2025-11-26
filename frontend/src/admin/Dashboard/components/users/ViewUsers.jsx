import React from 'react';
import Dashboard from '../../Dashboard';
import { Link } from 'react-router-dom';
import './user.css';

const ViewUsers = () => {
  return (
    <Dashboard>
      <div className='is-flex is-justify-content-end'>
        <Link
          to='/add-user'
          className='button px-6 is-success mb-6'>
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
          <tr>
            <td>1</td>
            <td>مهدی یار</td>
            <td>test@gmail.com</td>
            <td>مدیر</td>
            <td>
              <Link
                className='button is-info'
                to='/'>
                ویرایش
              </Link>
            </td>
            <td>
              <button className='button is-danger'>حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Dashboard>
  );
};

export default ViewUsers;
