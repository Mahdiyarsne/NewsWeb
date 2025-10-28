import { text } from 'express';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mahdiyarsne98@gmail.com',
    pass: 'kagn jmko qsci dvmr',
  },
});

export const sendEmailMsg = async (req, res) => {
  const { to, subject, message, email } = req.body;
  const user = ` شما یک پیام از طرف${email} - موضوع پیام${subject}`;
  try {
    let details = {
      from: email,
      to: 'mahdiyarsne98@gmail.com',
      subject: user,
      text: message,
    };

    await transporter.sendMail(details);

    res.json({ msg: 'ایمیل ارسال شد' });
  } catch (error) {
    console.log(error);
  }
};
