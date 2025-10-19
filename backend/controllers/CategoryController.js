import category from '../models/categoryModel.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await category.findAll();
    res.json(categories);
  } catch (error) {
    console.log(error);
  }
};

export const createCategory = async (req, res) => {
  try {
    res.json('createCategory');
  } catch (error) {
    console.log(error);
  }
};
