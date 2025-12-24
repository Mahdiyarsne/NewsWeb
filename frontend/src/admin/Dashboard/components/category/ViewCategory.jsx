import React, { useContext, useEffect } from 'react';
import Dashboard from '../../Dashboard';
import { Link } from 'react-router-dom';
import './category.css';
import { AdminContext } from '../../../context/context';
const ViewCategory = () => {
  const { getCategory, category, deleteCategory } = useContext(AdminContext);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Dashboard>
      <div className='is-flex is-justify-content-end'>
        <Link
          to='/add-category'
          className='button is-success px-6 mb-6 has-text-white'>
          افزودن دسته بندی
        </Link>
      </div>

      <table className='table is-fullwidth has-background-white '>
        <thead className='is-fullwidth '>
          <tr>
            <th>شماره</th>
            <th>نام</th>
            <th>ویرایش</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {category &&
            category.map((cat, index) => {
              return (
                <tr key={cat.id}>
                  <td>{index + 1}</td>
                  <td>{cat.name}</td>
                  <td>
                    <Link
                      state={cat}
                      to={`/edit-category/${cat.id}`}
                      className='button is-info has-text-white'>
                      ویرایش
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteCategory(cat.id)}
                      className='button is-danger has-text-white'>
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

export default ViewCategory;
