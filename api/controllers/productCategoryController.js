import { createSlug } from "../helper/createSlug.js";
import Category from "../models/CategoryModel.js";
import { unlinkSync } from "fs";

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
    const { name } = req.body;

    const data = await Category.create({
      name,
      slug: createSlug(name),
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

    // Delete Releted Photo.
    unlinkSync(`api/public/categoryPhoto/${data.photo}`);

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
    const { name } = req.body;

    // GetAllData.
    const oldData = await Category.findById(id);

    // Brand-Photo.
    let photo = oldData.photo;
    if (req.file?.filename) {
      photo = req.file.filename;
      unlinkSync(`api/public/categoryPhoto/${oldData.photo}`);
    }

    const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
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

// Update Category Status Controller.
export const updateCategoryStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const data = await Category.findByIdAndUpdate(
      id,
      {
        status,
      },
      { new: true }
    );
    res.status(200).json({
      category: data,
      message: "Single Category status updated success",
    });
  } catch (error) {
    next(error);
  }
};
