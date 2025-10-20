import { where } from 'sequelize';
import Category from '../models/categoryModel.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

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

export const updateCategory = async (req, res) => {
  const name = req.body.name;
  try {
    await Category.update({ name: name }, { where: { id: req.params.id } });
    res.json('دسته بندی به روز شد');
  } catch (error) {
    console.log(error);
  }
};

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
