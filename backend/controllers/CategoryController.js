import Category from '../models/categoryModel.js';

//دریافت تمامی دسته بندی ها
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

//ساخت دسته بندی
export const createCategory = async (req, res) => {
  const name = req.body.name;
  try {
    await Category.create({
      name: name,
    });
    res.json({ msg: 'دسته بندی اضافه شد' });
  } catch (error) {
    console.log(error);
  }
};

//ویرایش دسته بندی
export const updateCategory = async (req, res) => {
  const name = req.body.name;
  try {
    await Category.update({ name: name }, { where: { id: req.params.id } });
    res.json('دسته بندی به روز شد');
  } catch (error) {
    console.log(error);
  }
};

//حذف دسته بندی
export const deleteCategory = async (req, res) => {
  try {
    await Category.destroy({
      where: { id: req.params.id },
    });
    res.json('دسته بندی با موفقعیت حذف شد');
  } catch (error) {
    console.log(error);
  }
};
