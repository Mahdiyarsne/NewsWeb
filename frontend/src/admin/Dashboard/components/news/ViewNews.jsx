import React, { useContext, useEffect, useState } from 'react';
import Dashboard from '../../Dashboard';
import { Link } from 'react-router-dom';
import './news.css';
import { AdminContext } from '../../../context/context';

const ViewNews = () => {
  const { news, handleNews, deleteNews } = useContext(AdminContext);
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('');
  const handelId = (id) => {
    setId(id);
  };

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
                  <Link
                    to={`/edit-news/${item.id}`}
                    className='button has-text-white is-info'>
                    ویرایش
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => setShowModal(true)}
                    className='button has-text-white is-danger'>
                    <span onClick={() => handelId(item.id)}>حذف</span>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showModal ? (
        <div className='modal-overlay'>
          <div className='modal-news has-text-centered'>
            <h1 className='has-text-centered'>آیا از حذف این خبر مطمعنید؟</h1>
            <button
              className='button is-danger ml-2'
              onClick={() => deleteNews(id)}>
              <span onClick={() => setShowModal(false)}>بله مطمعنم</span>
            </button>
            <button
              className='button is-success'
              onClick={() => setShowModal(false)}>
              خیر
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </Dashboard>
  );
};

export default ViewNews;
