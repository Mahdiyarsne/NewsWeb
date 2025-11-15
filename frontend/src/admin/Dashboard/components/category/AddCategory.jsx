import React from 'react';
import Dashboard from '../../Dashboard';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const formSchema = Yup.object({
  name: Yup.string()
    .min(3, 'کارکتر نباید کمتر از 3 باشد')
    .max(15, 'کارکتر نباید بیشتر از 15 باشد')
    .required('وارد کردن دسته بندی الزامی است '),
});

const AddCategory = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (vlaues) => {
      console.log(vlaues);
    },
    validationSchema: formSchema,
  });
  return (
    <Dashboard>
      <form onSubmit={formik.handleSubmit}>
        <div className='field'>
          <label className='label'>نام دسته بندی</label>
          <div className='control '>
            <input
              type='text'
              className='input has-background-white has-text-black'
              onChange={formik.handleChange('name')}
              onBlur={formik.handleBlur('name')}
            />
            <p className='help has-text-danger'>
              {formik.touched.name && formik.errors.name}
            </p>
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <button className='button is-success px-6 has-text-white'>
              ذخیره{' '}
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default AddCategory;
