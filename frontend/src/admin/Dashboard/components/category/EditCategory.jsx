import React, { useContext } from 'react';
import Dashboard from '../../Dashboard';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AdminContext } from '../../../context/context';

const formSchema = Yup.object({
  name: Yup.string()
    .min(3, 'کارکتر نباید کمتر از 3 باشد')
    .max(15, 'کارکتر نباید بیشتر از 15 باشد')
    .required('وارد کردن دسته بندی الزامی است '),
});

const EditCategory = () => {
  const { updateCategory } = useContext(AdminContext);
  const { state } = useLocation();
  const { id } = useParams();
  const formik = useFormik({
    initialValues: {
      name: state.name,
      id: id,
    },
    onSubmit: (vlaues) => {
      updateCategory(vlaues);
    },
    validationSchema: formSchema,
  });

  return (
    <Dashboard>
      <div className='is-flex is-justify-content-end'>
        <Link
          to='/view-category'
          className='button is-success px-6 mb-6 has-text-white'>
          مشاهده دسته بندی
        </Link>
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className='field'>
          <label className='label'>ویرایش نام دسته بندی </label>
          <div className='control '>
            <input
              type='text'
              className='input has-background-white has-text-black'
              defaultValue={state.name}
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
              ویرایش دسته بندی{' '}
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default EditCategory;
