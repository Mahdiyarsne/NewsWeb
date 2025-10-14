import jwt from 'jsonwebtoken';
import Users from '../models/userModel.js';

export const token = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(401);

    const user = await Users.findAll({
      where: {
        resresh_token: refreshToken,
      },
    });

    if (!user[0]) return res.status(403);
    jwt.verify(refreshToken, process.env.REFRESH_JWT, (err, decoded) => {
      if (err) return res.status(403);
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
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};
