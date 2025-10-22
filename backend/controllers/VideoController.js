import Video from '../models/videoModel.js';
import path from 'path';
import fs from 'fs';

//دریافت تمامی ویدیو ها
export const getAllVideo = async (req, res) => {
  try {
    const video = await Video.findAll({});
    res.json(video);
  } catch (error) {
    console.log(error);
  }
};

//ساخت ویدیو
export const createVideo = async (req, res) => {
  if (req.files == null) return res.json({ msg: 'ویدیو انتخاب نشد' });
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  let dateNow = Math.round(Date.now());
  const fileName = dateNow + ext;
  const url = `${req.protocol}://${req.get('host')}/video/${fileName}`;
  const allowedType = ['.mp4'];
  if (!allowedType.includes(ext.toLowerCase())) {
    return res
      .status(403)
      .json({ msg: ' .mp4 * فرمت ویدیو معتبر نیست و از مجاز ' });
  }
  if (fileSize > 5000000)
    return res.json({ msg: '.حجم ویدیو نباید 5 مگابایت بیشتر باشد' });

  file.mv(`./public/video/${fileName}`, async (err) => {
    if (err) return res.json({ msg: err.message });
    try {
      await Video.create({ video: fileName, url: url });

      res.json({ msg: 'ویدیو با موفقعیت درست شد' });
    } catch (error) {
      console.log(err.message);
    }
  });
};

//دریافت یک ویدیو
export const getSingleVideo = async (req, res) => {
  try {
    const video = await Video.findOne({ order: [['createdAt', 'DESC']] });
    res.json(video);
  } catch (error) {
    console.log(error);
  }
};

//حذف ویدیو از طریق ایدی
export const deleteVideo = async (req, res) => {
  const video = await Video.findOne({ where: { id: req.params.id } });
  if (!video) return res.status(404).json({ msg: 'ویدیو یافت نشد' });

  try {
    const filePath = `./public/video/${video.video}`;
    fs.unlinkSync(filePath);
    await video.destroy({ where: { id: req.params.id } });
    res.status(201).json({ msg: 'ویدیو با موفقعیت حذف شد  ' });
  } catch (error) {
    console.log(error);
  }
};
