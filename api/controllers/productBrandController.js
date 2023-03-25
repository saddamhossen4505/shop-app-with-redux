import Brand from "../models/BrandsModel.js";

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
    const { name, slug } = req.body;

    const brand = await Brand.create({
      name,
      slug,
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

    res.status(200).json({
      brand,
      message: "Single brand delete successfull",
    });
  } catch (error) {
    next(error);
  }
};

// Delete single Brand-Controller.
export const updateSingleBrand = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, slug, photo } = req.body;
    const brand = await Brand.findByIdAndUpdate(
      id,
      {
        name: name,
        slug: slug,
        photo: photo,
      },
      { new: true }
    );

    res.status(200).json({
      brand,
      message: "Single brand updated successfull",
    });
  } catch (error) {
    next(error);
  }
};
