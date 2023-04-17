import { createSlug } from "../helper/createSlug.js";
import Brand from "../models/BrandsModel.js";
import { unlinkSync } from "fs";

// Get All BrandsController.
export const getAllBrands = async (req, res, next) => {
  try {
    const brand = await Brand.find();

    res.status(200).json({
      brands: brand,
      message: "All Brands successfull",
    });
  } catch (error) {
    next(error);
  }
};

// Create Brand-Controller.
export const createBrand = async (req, res, next) => {
  try {
    const { name } = req.body;

    const brand = await Brand.create({
      name,
      slug: createSlug(name),
      photo: req.file.filename,
    });

    res.status(200).json({
      brand,
      message: "Brand created successfull",
    });
  } catch (error) {
    next(error);
  }
};

// GET single Brand-Controller.
export const getSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);

    res.status(200).json({
      brand,
      message: "Single brand successfull",
    });
  } catch (error) {
    next(error);
  }
};

// Delete single Brand-Controller.
export const deleteSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findByIdAndDelete(id);

    // Delete Releted Photo.
    unlinkSync(`api/public/brandsPhoto/${brand.photo}`);

    res.status(200).json({
      brand,
      message: "Single brand delete successfull",
    });
  } catch (error) {
    next(error);
  }
};

// Update single Brand-Controller.
export const updateSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // GetAllData.
    const oldData = await Brand.findById(id);

    // Brand-Photo.
    let photo = oldData.photo;
    if (req.file?.filename) {
      photo = req.file.filename;
      unlinkSync(`api/public/brandsPhoto/${oldData.photo}`);
    } else {
      photo = oldData.photo;
    }

    const brand = await Brand.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
        photo,
      },
      { new: true }
    );
    res.status(200).json({
      brand: brand,
      message: "Single Brand update success",
    });
  } catch (error) {
    next(error);
  }
};

// updateBrandStatus.
export const updateBrandStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await Brand.findByIdAndUpdate(
      id,
      {
        status,
      },
      { new: true }
    );
    res.status(200).json({
      brand: data,
      message: "Brand status success",
    });
  } catch (error) {
    next(error);
  }
};
