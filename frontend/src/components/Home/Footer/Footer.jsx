import React, { useContext } from 'react';
import logo from '../../../assets/images/Logo2.png';
import logoImg from '../../../assets/images/Logo.jfif';
import newsImg from '../../../assets/images/1.jpeg';
import './footer.css';
import { Link } from 'react-router-dom';
import { HomeContext } from '../../../context/context';

const Footer = () => {
  const { popularNews } = useContext(HomeContext);
  return (
    <footer className=' mt-6 pt-6 pb-6'>
      <div className='container pt-6 pb-6'>
        <div className='columns'>
          <div className='column is-one-third'>
            <img
              src={logo}
              width='270px'
              alt='NotFound'
            />
          </div>
          <div className='column is-one-third'>
            <h1 className='subtitle has-text-white mb-5'>محبوب ترین خبر</h1>

            <ul className='color'>
              {popularNews &&
                popularNews?.map((news) => {
                  return (
                    <li
                      className='mt-4'
                      key={news.div}>
                      <div className=' post-footer is-flex is-aling-items-center'>
                        <div className='post-footer-image'>
                          <Link to='/'>
                            <img
                              src={news.url}
                              alt='NotFound'
                            />
                          </Link>
                        </div>
                        <div className='post-footer-title pr-3 color'>
                          <Link to='/'>
                            <h1 className=''>{news.title}</h1>
                          </Link>
                          <h1 className='post-footer-name'>
                            {news?.user?.name}
                          </h1>
                        </div>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className='column is-one-third'>
            <div className='footer-logo'>
              <img
                src={logoImg}
                alt=''
                width='150px'
              />
            </div>
            <div className='footer-desc pt-5'>
              <p>
                ما ایده‌های خام شما را به محصولات دیجیتال مقیاس‌پذیر تبدیل
                می‌کنیم. از طراحی معماری تا کدنویسی و دیپلوی نهایی.
              </p>
            </div>
            <div className='footer-adderss pt-6'>
              <p> ایران خراسان رضوی مشهد </p>
            </div>
            <div className='footer-phone pt-6'>
              <p>تلفن:09156683831</p>
            </div>
          </div>
        </div>
        <div className='columns mt-6 has-text-centered is-flex is-justify-content-center'>
          <p className='has-text-white'>
            تمام حقوق مادی و معنوی مطلق به{' '}
            <a
              className='has-text-info'
              href='https://fourty7.ir'
              target='_blank'
              rel='noreferrer'>
              Fourty7
            </a>{' '}
            می باشد
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
