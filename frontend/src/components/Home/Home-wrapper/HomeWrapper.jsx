import React, { useContext } from 'react';
import image from '../../../assets/images/1.jpeg';
import './HomeWrapper.css';
import { HomeContext } from '../../../context/context';
import Loader from '../../Loading/Loader';

const HomeWrapper = () => {
  const { videos, loading, error } = useContext(HomeContext);

  return (
    <div className='home-wrapper'>
      <div className='container'>
        <div className='columns is-flex-widescreen is-block-tablet is-align-items-start'>
          <div className='column is-one-quarter-widescreen is-full-desktop'>
            <div className='right-side-post'>
              <div className='right-side-top'>
                <div className='right-side-img'>
                  <div className='overlay'></div>
                  <img
                    src={image}
                    alt=''
                  />
                </div>
                <div className='post-info'>
                  <div className='post-cat'>
                    <span>تست</span>
                  </div>
                  <div className='post-title'>تست تایتل</div>
                  <div className='post-date'>18/09/1404</div>
                </div>
              </div>
            </div>
          </div>
          <div className='column is-three-quarters-widescreen is-full-tablet'>
            <div className='post-left-side'>
              {loading ? (
                <div className='has-text-centered'>
                  {' '}
                  <Loader />
                </div>
              ) : (
                <video
                  src={videos.url}
                  controls
                  width='100%'
                  height='100%'></video>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWrapper;
