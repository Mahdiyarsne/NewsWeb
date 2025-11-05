import React from 'react';
import Dashboard from '../../Dashboard';
import './news.css';

const AddNews = () => {
  return (
    <Dashboard>
      <form>
        <div className='field'>
          <label className='label'>عنوان خبر</label>
          <div className='control'>
            <input
              type='text'
              className='input has-text-black has-background-white '
            />
          </div>
        </div>
        <div className='field'>
          <label className='label'>متن خبر</label>
          <div className='control'>
            <textarea className='textarea'></textarea>
          </div>
        </div>

        <div className='field'>
          <label className='label'>دسته بندی خبر</label>
          <div className='control'>
            <div className='select is-fullwidth  '>
              <select className='has-text-black has-background-white'>
                <option>تست</option>
              </select>
            </div>
          </div>
        </div>

        <div className='field'>
          <label className='label'>عکس خبر</label>
          <div className='control'>
            <input
              type='file'
              className='input has-text-black has-background-white '
            />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <button className='button is-success px-6 has-text-white'>
              دخیره
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default AddNews;
