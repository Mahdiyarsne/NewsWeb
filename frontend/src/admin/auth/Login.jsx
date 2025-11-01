import React from 'react';
import './auth.css';
import { useFormik } from 'formik';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className='hero has-background-grey-light is-fullheight is-fullwidth'>
      <div className='background-overlay'></div>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-centered'>
            <div className='column is-4'>
              <form
                className='box'
                onSubmit={formik.handleSubmit}>
                <h1 className='title has-tex-centered mb-5'>
                  ورود به پنل مدیریت
                </h1>
                <div className='field'>
                  <label className='label'>ایمیل</label>
                  <div className='control'>
                    <input
                      type='text'
                      className='input'
                      placeholder='Example@gmail.com'
                      value={formik.values.email}
                      onChange={formik.handleChange('email')}
                      onBlur={formik.handleBlur('email')}
                    />
                  </div>
                  <div className='field'>
                    <label className='label'>پسورد</label>
                    <div className='control'>
                      <input
                        type='password'
                        className='input'
                        placeholder='رمز عبور'
                        value={formik.values.password}
                        onChange={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                      />
                    </div>
                  </div>

                  <div className='field mt-5'>
                    <button
                      type='submit'
                      className='button is-success is-fullwidth'>
                      ورود
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
