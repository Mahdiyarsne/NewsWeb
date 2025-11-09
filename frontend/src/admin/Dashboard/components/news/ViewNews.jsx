import React, { useContext, useEffect, useState } from 'react';
import Dashboard from '../../Dashboard';
import { Link } from 'react-router-dom';
import './news.css';
import { AdminContext } from '../../../context/context';

const ViewNews = () => {
  const { news, handleNews, deleteNews } = useContext(AdminContext);

  useEffect(() => {
    handleNews();
  }, []);

  return (
    <Dashboard>
      <div className='is-flex is-justify-content-end'>
        <Link
          to='add-news'
          className='button is-success px-6 mb-6 has-text-white'>
          افزودن خبر
        </Link>
      </div>

      <table className='table is-fullwidth has-background-white '>
        <thead className='is-fullwidth'>
          <tr>
            <th>شماره</th>
            <th>عنوان</th>
            <th>تصویر </th>
            <th>نویسنده</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {news?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                  <img
                    src={item.url}
                    width='80'
                    alt=''
                  />
                </td>

                <td>{item?.user?.name}</td>
                <td>
                  <button className='button has-text-white is-success'>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteNews(item.id)}
                    className='button has-text-white is-danger'>
                    حذف
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Dashboard>
  );
};

export default ViewNews;
