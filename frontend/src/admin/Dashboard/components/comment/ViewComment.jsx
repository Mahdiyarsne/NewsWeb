import React, { useContext, useEffect } from 'react';
import Dashboard from '../../Dashboard';
import { AdminContext } from '../../../context/context';

const ViewComment = () => {
  const {
    getAllComment,
    comments,
    deleteComment,
    activeComment,
    unactiveComment,
  } = useContext(AdminContext);

  useEffect(() => {
    getAllComment();
  }, []);
  return (
    <Dashboard>
      <table className='table is-fullwidth has-background-white '>
        <thead className='is-fullwidth '>
          <tr>
            <th>شماره</th>
            <th>موضوع</th>
            <th>متن</th>
            <th>ایمیل</th>
            <th>وضعیت</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {comments?.map((comment, index) => {
            return (
              <tr key={comment.id}>
                <td>{index + 1}</td>
                <td>{comment.subject}</td>
                <td>{comment.description}</td>
                <td>{comment.email}</td>
                <td>
                  {comment.isActive ? (
                    <button
                      className='button is-success'
                      onClick={() => unactiveComment(comment.id)}>
                      فعال
                    </button>
                  ) : (
                    <button
                      className='button is-warning'
                      onClick={() => activeComment(comment.id)}>
                      غیر فعال
                    </button>
                  )}
                </td>

                <td>
                  <button
                    className='button is-danger has-text-white'
                    onClick={() => deleteComment(comment.id)}>
                    حدف
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Dashboard>
  );
};

export default ViewComment;
