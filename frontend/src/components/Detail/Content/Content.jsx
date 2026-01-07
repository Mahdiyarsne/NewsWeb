import Comment from '../Comment/Comment';
import './content.css';
const Content = ({ data }) => {
  return (
    <div className='content-detail'>
      <div className='detail-image'>
        <img
          src={data.url}
          alt=''
        />
      </div>
      <div className='detail-title'>
        <h1 className='title mt-5'> {data.title}</h1>
      </div>
      <div className='detail-descrption'>
        <p className='description mt-5 has-text-justified text-black'>
          {data.desc}
        </p>
      </div>

      <div className='author'>
        <div className='box has-background-white'>
          <article className='media is-align-items-center'>
            <div className='title is-size-6 has-text-black'>نویسنده:</div>
            <div className='media-left'>
              <figure className='image is-64x64'>
                <img
                  src={data?.user?.url}
                  alt=''
                />
              </figure>
            </div>
            <div className='media-content'>
              <div className='content'>
                <p className='pr-4'>{data?.user?.name}</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className='commnet'>
        <Comment />
      </div>
    </div>
  );
};

export default Content;
