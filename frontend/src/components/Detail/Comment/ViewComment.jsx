import React from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';

import './comment.css';
const ViewComment = () => {
  return (
    <div className='comment-view mt-5 '>
      <div className='box back'>
        <div className='name is-size-5'>مهدی یار</div>
        <div className='subject has-text-grey'>
          <div className='pr-2 mt-2'>
            <BsArrowReturnLeft />
          </div>
          <span className='pr-4 pt-1 is-size-6'>موضوع عشقیی</span>
        </div>
        <div className='desc pt-4 '>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eius
            quasi distinctio. Nemo iure cumque, incidunt facilis veniam nesciunt
            earum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViewComment;
