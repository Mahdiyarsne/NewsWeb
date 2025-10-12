import Users from '../models/userModel.js';
import bcrypt from 'bcrypt';

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
    console.log(error);
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
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      isAdmin: isAdmin,
    });

    res.json({ message: 'ثبت نام موفقیت آمیز بود' });
  } catch (error) {
    console.log(error);
  }
};
