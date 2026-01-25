import React, { useContext } from 'react';
import './notFound.css';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../admin/context/context';

const NotFound = () => {
  return (
    <div className='not-view is-flex is-align-items-center is-justify-content-center'>
      <div className='content'>
        <h2>404</h2>
        <h4>صفحه پیدا نشد!</h4>
        <p>مشکلی پیش آمده صفحه مورد مظر یافت نشده است؟</p>
        <Link
          to='/'
          className='button is-success large is-size-5 has-text-white'>
          {' '}
          رفتن به صفحه اصلی
        </Link>
        <Link
          to='/administrator'
          className='button is-primary large is-size-5 has-text-white mx-3'>
          {' '}
          ورود به حساب کاربری
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
