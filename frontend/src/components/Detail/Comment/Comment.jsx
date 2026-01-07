import React from 'react';
import ViewComment from './ViewComment';
import './comment.css';

const Comment = () => {
  return (
    <>
      <div className='commnet-section mt-6 mb-6'>
        <form>
          <div className='field'>
            <textarea
              className='textarea text-black'
              placeholder='نظر شما'></textarea>
          </div>
          <div className='columns'>
            <div className='column'>
              <div className='field'>
                <input
                  type='text'
                  className='input'
                  placeholder='نام شما'
                />
              </div>
            </div>
            <div className='column'>
              <div className='field'>
                <input
                  type='email'
                  className='input'
                  placeholder='ایمیل شما'
                />
              </div>
            </div>
          </div>
          <div className='field'>
            <input
              type='text'
              className='input'
              placeholder='موضوع'
            />
          </div>
          <div className='field'>
            <button className='button has-background-danger is-fullwidth mt-5 has-text-white'>
              ارسال نظر
            </button>
          </div>
        </form>
      </div>

      <ViewComment />
    </>
  );
};

export default Comment;
