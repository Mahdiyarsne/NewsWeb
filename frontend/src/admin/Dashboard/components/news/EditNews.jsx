import React, { useContext, useEffect, useState } from 'react';
import Dashboard from '../../Dashboard';
import './news.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AdminContext } from '../../../context/context';
import { useLocation, useParams } from 'react-router-dom';

const formSchema = Yup.object({
  title: Yup.string().required('عنوان خبر الزامی است'),
  desc: Yup.string().required('متن خبر الزامی است'),
  catId: Yup.string().required('دسته بندی خبر الزامی است'),
});

const EditNews = () => {
  const { axiosJWT, token, singleNews, updateNews } = useContext(AdminContext);
  const [categoryList, setCategroyList] = useState([]);
  const [file, setFile] = useState([]);
  const [preview, setPreview] = useState('');
  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const { id } = useParams();
  const { state } = useLocation();

  
  useEffect(() => {
    getAllCategory();
    singleNews(id);
  }, []);

  const getAllCategory = async () => {
    try {
      const res = await axiosJWT.get('http://localhost:5000/api/get-category', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setCategroyList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: state.title,
      desc: state.desc,
      catId: state.catId,
      file: '',
    },
    onSubmit: (values) => {
      const data = {
        title: values.title,
        desc: values.desc,
        catId: values.catId,
        file: file,
        id: id,
      };
      updateNews(data);
    },
    validationSchema: formSchema,
  });

  return (
    <Dashboard>
      <form onSubmit={formik.handleSubmit}>
        <div className='field'>
          <label className='label'>عنوان خبر</label>
          <div className='control'>
            <input
              type='text'
              className='input has-text-black has-background-white '
              defaultValue={state.title}
              onChange={formik.handleChange('title')}
              onBlur={formik.handleBlur('title')}
            />
            <p className='help has-text-danger'>
              {formik.touched.title && formik.errors.title}
            </p>
          </div>
        </div>
        <div className='field'>
          <label className='label'>متن خبر</label>
          <div className='control'>
            <textarea
              className='textarea'
              defaultValue={state.desc}
              onChange={formik.handleChange('desc')}
              onBlur={formik.handleBlur('desc')}></textarea>
            <p className='help has-text-danger'>
              {formik.touched.desc && formik.errors.desc}
            </p>
          </div>
        </div>

        <div className='field'>
          <label className='label'>دسته بندی خبر</label>
          <div className='control'>
            <div className='select is-fullwidth  '>
              <select
                className='has-text-black has-background-white'
                defaultValue={state.catId}
                onChange={formik.handleChange('catId')}
                onBlur={formik.handleBlur('catId')}>
                <option>انتخاب کنید</option>
                {categoryList.map((cat) => (
                  <option
                    key={cat.id}
                    value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <p className='help has-text-danger '>
                {formik.touched.catId && formik.errors.catId}
              </p>
            </div>
          </div>
        </div>

        <div className='field my-5'>
          <label className='label'>عکس خبر</label>
          <div className='control'>
            <input
              type='file'
              className='input has-text-black has-background-white '
              onChange={loadImage}
            />
            {preview ? (
              <figure className='mt-3'>
                <img
                  src={preview}
                  width='100'
                  alt=''
                />
              </figure>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <button
              type='submit'
              className='button is-success px-6 has-text-white'>
              دخیره
            </button>
          </div>
        </div>
      </form>
    </Dashboard>
  );
};

export default EditNews;
