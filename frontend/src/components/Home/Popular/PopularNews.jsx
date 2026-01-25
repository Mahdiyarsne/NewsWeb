import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsEye } from 'react-icons/bs';
import travel from '../../../assets/images/traveling.jpg';
import './popular.css';
import { HomeContext } from '../../../context/context';
import Loader from '../../Loading/Loader';
import moment from 'jalali-moment';

const PopularNews = () => {
  const { laodingPopular, popularNews } = useContext(HomeContext);

  return (
    <div className='container mt-6'>
      <div className='columns'>
        {laodingPopular ? (
          <div className='column is-four-fifths has-background-white p-4 has-text-centered'>
            <Loader />
          </div>
        ) : (
          <div className='column is-four-fifths has-background-white p-4'>
            <div className='popular mb-5'>
              <h1 className='has-text-black is-size-3 has-text-weight-bold'>
                محبوب ترین خبر ها
              </h1>
            </div>
            <div className='columns'>
              {popularNews &&
                popularNews?.map((news) => {
                  return (
                    <div className='column popluar-news' key={news.id}>
                      <div className='popular-img is-relative'>
                        <Link
                          to={`/detail/${news.id}`}
                          state={news}>
                          <img
                            src={news.url}
                            className='is-fullwidth popular-image'
                            alt='NotFound'
                          />
                        </Link>
                        <div className='num-views'>
                          <span>
                            <BsEye />
                            {news.numViews}
                          </span>
                        </div>
                      </div>
                      <div className='popular-title'>
                        <h6 className='is-flex has-text-weight-bold is-size-5'>
                          <Link to={`/detail/${news.id}`}>{news.title}</Link>
                        </h6>
                      </div>
                      <div className='author mt-4'>
                        <span className='is-size-6 has-text-gray ml-2'>
                          {moment(news.createdAt)
                            .locale('fa')
                            .format('YYYY-MM-DD')}
                        </span>
                        <span className='is-size-6 has-text-gray mx-3'>
                          {news?.user?.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

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
