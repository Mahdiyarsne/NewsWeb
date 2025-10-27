import Comments from '../models/commentModel.js';

//دریافت تمامی نظرات
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comments.findAll({});
    res.json(comments);
  } catch (error) {
    console.log(error);
  }
};

//ساخت نظر
export const createComment = async (req, res) => {
  const { newsId, name, description, email, subject } = req.body;
  try {
    await Comments.create({
      newsId,
      name,
      description,
      email,
      subject,
    });
    res.json({ msg: ' نظر شما ارسال شد و پس از تایید آدمین نمایش داده میشود' });
  } catch (error) {
    console.log(error);
  }
};

//ویرایش نظر
export const updateComment = async (req, res) => {
  const { name, description, subject } = req.body;
  try {
    await Comments.update(
      {
        name,
        description,
        subject,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.json({ msg: 'نظر با موفقعیت ویرایش شد' });
  } catch (error) {
    console.log(error);
  }
};

//حذف نظر
export const deleteComment = async (req, res) => {
  try {
    await Comments.destroy({
      where: { id: req.params.id },
    });
    res.json({ msg: 'نظر با موفقعیت حدف شد' });
  } catch (error) {
    console.log(error);
  }
};
