import React from 'react';
import Dashboard from '../../Dashboard';
import { Link } from 'react-router-dom';
import './news.css';

const ViewNews = () => {
  return (
    <Dashboard>
      <div className='is-flex is-justify-content-end'>
        <Link
          to='add-news'
          className='button is-success px-6 mb-6 has-text-white'>
          افزودن خبر
        </Link>
      </div>

      <table className='table is-fullwidth has-background-white'>
        <thead className='is-fullwidth'>
          <tr>
            <th>شماره</th>
            <th>عنوان</th>
            <th>متن </th>
            <th>تصویر </th>
            <th>نویسنده</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>متن</td>
            <td>تست متن</td>
            <td>عکس</td>
            <td>مهدی یار</td>
            <td>
              <button className='button has-text-white is-success'>
                ویرایش
              </button>
            </td>
            <td>
              <button className='button has-text-white is-danger'>حذف </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Dashboard>
  );
};

export default ViewNews;
