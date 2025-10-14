import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null)
    return res.json({
      message: 'شما ابتدا باید وارد حساب کاربری شوید.',
    });

  jwt.sign(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err)
      res.status(401).json({
        message: 'توکن منقضی شده است',
      });
    next();
  });
};
