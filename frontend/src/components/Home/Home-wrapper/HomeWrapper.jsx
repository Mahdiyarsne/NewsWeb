import React, { useContext } from 'react';
import './HomeWrapper.css';
import { HomeContext } from '../../../context/context';
import Loader from '../../Loading/Loader';
import moment from 'jalali-moment';

const HomeWrapper = () => {
  const { videos, loading, error, loadingLastPost, errorLastPost, lastPosts } =
    useContext(HomeContext);

  return (
    <div className='home-wrapper'>
      <div className='container'>
        <div className='columns is-flex-widescreen is-block-tablet is-align-items-start'>
          <div className='column is-one-quarter-widescreen is-full-desktop'>
            <div className='right-side-post'>
              {loadingLastPost ? (
                <div className='right-side-top has-text-centered mt-6'>
                  <Loader />
                </div>
              ) : (
                <>
                  {lastPosts.map((news) => {
                    return (
                      <div
                        className='right-side-top'
                        key={news.id}>
                        <div className='right-side-img'>
                          <div className='overlay'></div>
                          <img
                            src={news.url}
                            alt='NotFound'
                          />
                        </div>
                        <div className='post-info'>
                          <div className='post-cat'>
                            <span>{news.category.name}</span>
                          </div>
                          <div className='post-title'>{news.title}</div>
                          <div className='post-date'>
                            {moment(news.createdAt)
                              .locale('fa')
                              .format('YYYY-MM-DD')}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
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
