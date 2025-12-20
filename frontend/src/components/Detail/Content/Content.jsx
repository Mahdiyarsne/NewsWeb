import React from 'react';
import Img from '../../../assets/images/1.jpeg';
import Comment from '../Comment/Comment';
import './content.css';
const Content = () => {
  return (
    <div className='content-detail'>
      <div className='detail-image'>
        <img
          src={Img}
          alt=''
        />
      </div>
      <div className='detail-title'>
        <h1 className='title mt-5'> تست تایتل خبر</h1>
      </div>
      <div className='detail-descrption'>
        <p className='description mt-5 has-text-justified'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>

      <div className='coomnet'>
        <Comment />
      </div>
    </div>
  );
};

export default Content;
