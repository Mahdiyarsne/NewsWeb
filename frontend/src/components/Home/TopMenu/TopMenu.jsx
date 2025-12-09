import React from 'react';
import { BsFillTelephoneFill, BsReception4 } from 'react-icons/bs';
import logo from '../../../assets/images/logo.png';
import ads from '../../../assets/images/ads.jpg';
import './topmenu.css';
const TopMenu = () => {
  return (
    <>
      <div className='top-menu has-background-black py-2'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-two-thirds is-flex is-justify-content-start'>
              <span className='has-text-white is-flex ia-align-align-items-center'>
                <BsReception4 className='ml-2 has-text-danger' /> برقراری ارتباط
                :example@gmail.com
              </span>
            </div>
            <div className='column is-one-third is-flex is-justify-content-end'>
              <span className='has-text-white is-flex ia-align-align-items-center'>
                <BsFillTelephoneFill className='ml-2 has-text-danger is-size-5' />{' '}
                0915656353
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='home-page-logo p-3'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-two-thirds ads'>
              <img
                src={ads}
                alt='NotFound'
              />
            </div>
            <div className='column is-one-third is-flex is-justify-content-end'>
              <img
                src={logo}
                alt='NotFound'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
