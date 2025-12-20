import React from 'react';
import './sideLeft.css';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import ads from '../../../assets/images/news_card.jpg';
import { useParams } from 'react-router-dom';

const SideLeft = () => {
  const { id } = useParams();
  const shareUrl = `http://localhost:3000/detail/${id}`;
  return (
    <div className='side-left'>
      <div className='social-media has-background-white p-5'>
        <h1 className='is-size-6 has-text-weight-bold mb-4'>اشتراک گذاری</h1>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon
            round={true}
            size={40}
          />
        </FacebookShareButton>
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon
            round={true}
            size={40}
          />
        </TelegramShareButton>
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon
            round={true}
            size={40}
          />
        </WhatsappShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon
            round={true}
            size={40}
          />
        </TwitterShareButton>
      </div>
      <div className='detail-ads has-text-centered mt-5'>
        <img
          src={ads}
          width='250'
          alt=''
        />
      </div>
    </div>
  );
};

export default SideLeft;
