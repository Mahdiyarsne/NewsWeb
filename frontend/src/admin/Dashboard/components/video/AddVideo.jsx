import React, { useContext, useState } from 'react';
import Dashboard from '../../Dashboard';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AdminContext } from '../../../context/context';

const AddVideo = () => {
  const [file, setFile] = useState();
  const { createVideo, errorVideo } = useContext(AdminContext);

  const formik = useFormik({
    initialValues: {
      file: '',
    },
    onSubmit: (values) => {
      const data = {
        file: file,
      };
      createVideo(data);
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
          <p className='help has-text-danger'>{errorVideo}</p>
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
