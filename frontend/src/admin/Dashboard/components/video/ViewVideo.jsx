import React from 'react';
import Dashboard from '../../Dashboard';
import './video.css';
import { Link } from 'react-router-dom';

const ViewVideo = () => {
  return (
    <Dashboard>
      <div className='is-flex is-justify-content-end'>
        <Link
          to='/add-video'
          className='button is-success px-6 mb-6 has-text-white'>
          افزودن ویدیو
        </Link>{' '}
      </div>
      <table className='table is-fullwidth has-background-white'>
        <thead>
          <tr>
            <td>شماره</td>
            <td>ویدیو</td>
            <td>حذف</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>تست</td>
            <td>
              <button className='button is-danger has-text-white'>حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
    </Dashboard>
  );
};

export default ViewVideo;
