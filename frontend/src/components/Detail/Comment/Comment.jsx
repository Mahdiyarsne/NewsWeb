import React, { useContext, useState } from 'react';
import ViewComment from './ViewComment';
import './comment.css';
import { useParams } from 'react-router-dom';
import { HomeContext } from '../../../context/context';

const Comment = () => {
  const { createComment } = useContext(HomeContext);

  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const { id } = useParams();
  const newsId = id;
  const reset = () => {
    setName('');
    setEmail('');
    setSubject('');
    setDescription('');
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {
      newsId,
      name,
      email,
      subject,
      description,
    };
    createComment(data);
    reset();
  };

  return (
    <>
      <div className='commnet-section mt-6 mb-6'>
        <form onSubmit={handelSubmit}>
          <div className='field'>
            <textarea
              className='textarea text-black'
              value={description}
              placeholder='نظر شما'
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className='columns'>
            <div className='column'>
              <div className='field'>
                <input
                  type='text'
                  className='input'
                  value={name}
                  placeholder='نام شما'
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className='column'>
              <div className='field'>
                <input
                  type='email'
                  className='input'
                  value={email}
                  placeholder='ایمیل شما'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className='field'>
            <input
              type='text'
              className='input'
              placeholder='موضوع'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
