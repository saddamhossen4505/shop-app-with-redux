import Category from "../models/CategoryModel.js";

// GetAll CategoryController.
export const getAllCategory = async (req, res, next) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      message: "All category is success",
    });
  } catch (error) {
    next(error);
  }
};

// Create CategoryController.
export const createProductCategory = async (req, res, next) => {
  try {
    const { name, slug } = req.body;

    const data = await Category.create({
      name,
      slug,
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      message: "Category created success",
    });
  } catch (error) {
    next(error);
  }
};

// Single Category Controller.
export const getSingleProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Category.findById(id);
    res.status(200).json({
      category: data,
      message: "Single Category success",
    });
  } catch (error) {
    next(error);
  }
};

// Delete Single-Category Controller.
export const deleteSingleProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await Category.findByIdAndDelete(id);
    res.status(200).json({
      category: data,
      message: "Single Category deleted success",
    });
  } catch (error) {
    next(error);
  }
};

// Update Single-Category Controller.
export const updateSingleProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;

    const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug,
        photo,
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Single Category updated success",
    });
  } catch (error) {
    next(error);
  }
};
