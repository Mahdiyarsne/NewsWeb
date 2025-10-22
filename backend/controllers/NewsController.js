import News from '../models/newsModel.js';
import path from 'path';

export const getAllNews = async (req, res) => {
  try {
    const news = await News.findAll({});
    res.json(news);
  } catch (error) {
    console.log(error);
  }
};

export const createNews = async (req, res) => {
  if (req.files == null) return res.json({ error: 'عکسی انتخاب نشد' });
  const { title, desc, catId, userId } = req.body;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  let dateNow = Math.round(Date.now());
  const fileName = dateNow + ext;
  const url = `${req.protocol}://${req.get('host')}/avatar/${fileName}`;
  const allowedType = ['.png', '.jpg', '.jpeg'];
  if (!allowedType.includes(ext.toLowerCase())) {
    return res
      .status(403)
      .json({ msg: ' .png,.jpg,.jpeg * فرمت عکس معتبر نیست و از مجاز ' });
  }
  if (fileSize > 5000000)
    return res.json({ msg: '.حجم عکس نباید 5 مگابایت بیشتر باشد' });

  file.mv(`./public/avatar/${fileName}`, async (err) => {
    if (err) return res.json({ msg: err.message });
    try {
      await News.create({
        title: title,
        desc: desc,
        catId: catId,
        userId: userId,
        image: fileName,
        url: url,
      });
      res.json({ msg: 'خبر با موفقعیت آپلود  شد' });
    } catch (error) {
      console.log(error);
    }
  });
};
