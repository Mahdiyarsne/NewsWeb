import Comments from '../models/commentModel.js';

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comments.findAll({});
    res.json(comments);
  } catch (error) { 
    console.log(error);
  }
};
