import React, { useContext } from 'react';
import './information.css';
import { Link } from 'react-router-dom';
import profile from '../../../../assets/images/profile.png';
import {
  BsFillCapslockFill,
  BsFillPersonPlusFill,
  BsChatDots,
} from 'react-icons/bs';
import { AdminContext } from '../../../context/context';

const Information = () => {
  const { userId } = useContext(AdminContext);

  return (
    <div className='infromation'>
      <div className='view-web is-flex is-align-items-center is-justify-content-space-between mb-5'>
        <div className='view-webpage'>
          <a
            href='/'
            className='button has-background-success has-text-white'>
            مشاهده وب سایت
          </a>
        </div>
        <div className='view-profile'>
          <span>
            <Link to={`/update-profile/${userId}`}>
              <img
                className='image profile-photo'
                src={profile}
                alt=''
              />
            </Link>
          </span>
        </div>
      </div>
      <div className='info is-flex is-align-items-center is-justify-content-space-between'>
        <div className='info-item'>
          <h4>خبرها</h4>
          <span>12</span>
          <BsFillCapslockFill />
        </div>
        <div className='info-item'>
          <h4>کاربران</h4>
          <span>8</span>
          <BsFillPersonPlusFill />
        </div>
        <div className='info-item'>
          <h4>نظرات</h4>
          <span>10</span>
          <BsChatDots />
        </div>
      </div>
    </div>
  );
};

export default Information;
