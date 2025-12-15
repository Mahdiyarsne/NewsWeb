import React from 'react';
import { Link } from 'react-router-dom';
import popularImg from '../../../assets/images/1.jpeg';
import { BsEye } from 'react-icons/bs';
import travel from '../../../assets/images/traveling.jpg';
import './popular.css';

const PopularNews = () => {
  return (
    <div className='container mt-6'>
      <div className='columns'>
        <div className='column is-four-fifths has-background-white p-4'>
          <div className='popular mb-5'>
            <h1 className='has-text-black is-size-3 has-text-weight-bold'>
              محبوب ترین خبر ها
            </h1>
          </div>
          <div className='columns'>
            <div className='column popluar-news'>
              <div className='popular-img is-relative'>
                <Link to='/'>
                  <img
                    src={popularImg}
                    className='is-fullwidth popular-image'
                    alt='NotFound'
                  />
                </Link>
                <div className='num-views'>
                  <span>
                    <BsEye />
                    167
                  </span>
                </div>
              </div>
              <div className='popular-title'>
                <h6 className='is-flex has-text-weight-bold is-size-5'>
                  <Link to='/'>تست تایتل</Link>
                </h6>
              </div>
              <div className='author mt-4'>
                <span className='is-size-6 has-text-gray ml-2'>24/09/1404</span>
                <span className='is-size-6 has-text-gray mr-2'>
                  مهدی یار ثنایی مقدم
                </span>
              </div>
            </div>
            <div className='column popluar-news'>
              <div className='popular-img is-relative'>
                <Link to='/'>
                  <img
                    src={popularImg}
                    className='is-fullwidth popular-image'
                    alt='NotFound'
                  />
                </Link>
                <div className='num-views'>
                  <span>
                    <BsEye />
                    167
                  </span>
                </div>
              </div>
              <div className='popular-title'>
                <h6 className='is-flex has-text-weight-bold is-size-5'>
                  <Link to='/'>تست تایتل</Link>
                </h6>
              </div>
              <div className='author mt-4'>
                <span className='is-size-6 has-text-gray ml-2'>24/09/1404</span>
                <span className='is-size-6 has-text-gray mr-2'>
                  مهدی یار ثنایی مقدم
                </span>
              </div>
            </div>{' '}
            <div className='column popluar-news'>
              <div className='popular-img is-relative'>
                <Link to='/'>
                  <img
                    src={popularImg}
                    className='is-fullwidth popular-image'
                    alt='NotFound'
                  />
                </Link>
                <div className='num-views'>
                  <span>
                    <BsEye />
                    167
                  </span>
                </div>
              </div>
              <div className='popular-title'>
                <h6 className='is-flex has-text-weight-bold is-size-5'>
                  <Link to='/'>تست تایتل</Link>
                </h6>
              </div>
              <div className='author mt-4'>
                <span className='is-size-6 has-text-gray ml-2'>24/09/1404</span>
                <span className='is-size-6 has-text-gray mr-2'>
                  مهدی یار ثنایی مقدم
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='column is-one-fifth has-text-centred ads'>
          <img
            src={travel}
            alt='NotFound'
          />
        </div>
      </div>
    </div>
  );
};

export default PopularNews;
