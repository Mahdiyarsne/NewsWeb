import Video from '../models/videoModel.js';
import path from 'path';

export const createVideo = async (req, res) => {
  if (req.files == null) return res.json({ msg: 'ویدیو انتخاب نشد' });
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  let dateNow = Math.round(Date.now());
  const fileName = dateNow + ext;
  const url = `${req.protocol}://${req.get('host')}/${fileName}`;
  const allowedType = ['.mp4'];
  if (!allowedType.includes(ext.toLowerCase())) {
    return res.json({ msg: ' .mp4 * فرمت ویدیو معتبر نیست و از مجاز ' });
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
