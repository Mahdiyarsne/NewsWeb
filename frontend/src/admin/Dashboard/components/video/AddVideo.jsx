import React, { useState } from 'react';
import Dashboard from '../../Dashboard';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const AddVideo = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      file: '',
    },
    onSubmit: (values) => {
      const data = {
        file: file,
      };
      console.log(data);
    },
  });

  return (
    <Dashboard>
      <form onSubmit={formik.handleSubmit}>
        <div className='control'>
          <label className='label'>ویدیو خود را انتخاب کنید</label>
          <input
            type='file'
            className='input has-background-white'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button
          type='submit'
          className='button is-success is-size-6 px-6 my-5 has-text-white'>
          {' '}
          افزودن ویدیو
        </button>
      </form>
    </Dashboard>
  );
};

export default AddVideo;
