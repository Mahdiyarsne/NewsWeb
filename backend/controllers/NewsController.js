import News from '../models/newsModel.js';
import path from 'path';
import fs from 'fs';
import Category from '../models/categoryModel.js';
import Users from '../models/userModel.js';

//دریافت تمامی خبر ها
export const getAllNews = async (req, res) => {
  try {
    const news = await News.findAll({});
    res.json(news);
  } catch (error) {
    console.log(error);
  }
};

//ساخت خبر
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

//دریافت خبر براساس ایدی
export const getNewsById = async (req, res) => {
  try {
    const response = await News.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

//ویرایش خبر
export const updateNews = async (req, res) => {
  const news = await News.findOne({ where: { id: req.params.id } });
  if (!news) return res.status(404).json({ msg: 'دیتایی یافت نشد' });

  let fileName = '';
  if (req.files == null) {
    fileName = news.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    let dateNow = Math.round(Date.now());
    fileName = dateNow + ext;
    const allowedType = ['.png', '.jpg', '.jpeg'];
    if (!allowedType.includes(ext.toLowerCase())) {
      return res
        .status(403)
        .json({ msg: ' .png,.jpg,.jpeg * فرمت عکس معتبر نیست و از مجاز ' });
    }
    if (fileSize > 5000000)
      return res.json({ msg: '.حجم عکس نباید 5 مگابایت بیشتر باشد' });

    const filePath = `./public/avatar/${news.image}`;
    fs.unlinkSync(filePath);
    file.mv(`./public/avatar/${fileName}`, (err) => {
      if (err) return res.json({ msg: err.message });
    });
  }

  const { title, desc, userId, catId } = req.body;
  const url = `${req.protocol}://${req.get('host')}/avater/${fileName}`;

  try {
    await News.update(
      {
        title: title,
        desc: desc,
        userId: userId,
        catId: catId,
        image: fileName,
        url: url,
      },
      { where: { id: req.params.id } }
    );

    res.json({ msg: 'خبر با موفقعیت ویرایش شد' });
  } catch (error) {
    console.log(error);
  }
};

//حذف خبر
export const deleteNews = async (req, res) => {
  const news = await News.findOne({ where: { id: req.params.id } });
  if (!news) return res.json({ mesg: 'خبر یافت نشد' });

  try {
    const filePath = `./public/avatar/${news.image}`;
    fs.unlinkSync(filePath);

    await news.destroy({ where: { id: req.params.id } });

    res.json({ msg: 'خبر با موفعیت حذف شد' });
  } catch (error) {
    console.log(error);
  }
};

//دریافت اخرین خبر
export const getLastNews = async (req, res) => {
  try {
    const news = await News.findAll({
      limit: 2,
      order: [['id', 'DESC']],
      include: [Category],
    });
    res.json(news);
  } catch (error) {
    console.log(error);
  }
};

//دریافت جزییات خبر

export const getDetailNews = async (req, res) => {
  try {
    const response = await News.findOne({ where: { id: req.params.id } });

    const numViews = response.numViews + 1;
    await News.update({ numViews }, { where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

//دریافت محبوب ترین خبر

export const popularNews = async (req, res) => {
  try {
    const news = await News.findAll({
      limit: 4,
      order: [['numViews', 'DESC']],
      include: [
        {
          model: Users,
          attributes: ['id', 'name', 'email', 'url'],
        },
      ],
    });

    res.json(news);
  } catch (error) {
    console.log(error);
  }
};

//دریافت دسته بندی خبر
export const getCatNews = async (req, res) => {
  try {
    const hasCategory = req.query.cat;
    const news = hasCategory
      ? await News.findAll({
          where: { catId: hasCategory },
          order: [['id', 'DESC']],
        })
      : await News.findAll({
          order: [['id', 'DESC']],
        });
    res.json(news);
  } catch (error) {
    console.log(error);
  }
};
