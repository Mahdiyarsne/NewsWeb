import React from 'react';
import image from '../../../assets/images/1.jpeg';
import vid from '../../../assets/video/newsvideo.mp4';
import './HomeWrapper.css';

const HomeWrapper = () => {
  return (
    <div className='home-wrapper'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
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
          <div className='column'>
            <div className='post-left-side'>
              <video
                src={vid}
                controls></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWrapper;
