import Tag from "../models/TagModel.js";

// Get AllTagController.
export const getAllTags = async (req, res, next) => {
  try {
    const data = await Tag.find();

    res.status(200).json({
      tags: data,
      message: "Get all tags success",
    });
  } catch (error) {
    next(error);
  }
};

// Create TagController.
export const createTag = async (req, res, next) => {
  try {
    const { name, slug } = req.body;

    const data = await Tag.create({
      name,
      slug,
    });

    res.status(200).json({
      tags: data,
      message: "Tag created success",
    });
  } catch (error) {
    next(error);
  }
};

// Get-SingleTag Controller.
export const getSingleTag = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Tag.findById(id);

    res.status(200).json({
      tags: data,
      message: "Single tag success",
    });
  } catch (error) {
    next(error);
  }
};

// Delete-SingleTag Controller.
export const deleteSingleTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tag.findByIdAndDelete(id);

    res.status(200).json({
      tags: data,
      message: "Single tag delete success",
    });
  } catch (error) {
    next(error);
  }
};

// Update-SingleTag Controller.
export const updateSingleTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug } = req.body;
    const data = await Tag.findByIdAndUpdate(
      id,
      {
        name,
        slug,
      },
      { new: true }
    );

    res.status(200).json({
      tags: data,
      message: "Single tag updated success",
    });
  } catch (error) {
    next(error);
  }
};
