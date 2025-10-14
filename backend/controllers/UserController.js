import Users from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll({});
    if (!users) {
      res.status(404).json({
        message: 'کاربران یافت نشد.دوباره تلاش کنید',
      });
    }
    res.json(users);
  } catch (error) {
    return res.status(500).json({
      message: 'مشکلی پیش آمده لطفا دوباره تلاش کن',
    });
  }
};

export const registerUser = async (req, res) => {
  const { name, email, password, confPassword, isAdmin } = req.body;

  if (password !== confPassword) {
    res.json({ message: 'پسورد و تکرار آن با هم مطابق ندارد.' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const found = await Users.findOne({ where: { email: email } });
    if (found) {
      return res
        .status(400)
        .json({ message: 'ایمیل توسط  کاربر دیگری گرفته شده است' });
    }
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      isAdmin: isAdmin,
    });

    res.status(200).json({ message: 'ثبت نام موفقیت آمیز بود' });
  } catch (error) {
    return res.status(500).json({
      message: 'مشکلی پیش آمده لطفا دوباره تلاش کن',
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });

    const match = await bcrypt.compare(req.body.password, user[0].password);
    if (!match) {
      return res.status(400).json({
        error: 'پسورود اشتباه است',
      });
    }

    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;
    const isAdmin = user[0].isAdmin;
    const accessToken = jwt.sign(
      { userId, name, email, isAdmin },
      process.env.JWT_SECRET,
      {
        expiresIn: '45s',
      }
    );

    const refreshToken = jwt.sign(
      { userId, name, email, isAdmin },
      process.env.REFRESH_JWT,
      {
        expiresIn: '1d',
      }
    );

    await Users.update(
      { resresh_token: refreshToken },
      {
        where: {
          id: userId,
        },
      }
    );
    res.status(200).json({
      userId,
      name,
      email,
      isAdmin,
      accessToken,
      message: 'شما با مواقعیت وارد شدید',
    });
  } catch (error) {
    console.log(error);
  }
};
