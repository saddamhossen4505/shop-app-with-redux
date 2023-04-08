import { createSlug } from "../helper/createSlug.js";
import Product from "../models/ProductModel.js";
import { unlinkSync } from "fs";

// Get All Prodcut-controller.
export const getAllProducts = async (req, res, next) => {
  try {
    const data = await Product.find();

    res.status(200).json({
      products: data,
      message: "Get all product success",
    });
  } catch (error) {
    next(error);
  }
};

// Create Prodcut-controller.
export const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      regular_price,
      sale_price,
      short_desc,
      long_desc,
      stock,
      categories,
      tags,
      brands,
    } = req.body;

    // Product-photo.
    const photo = req.files.product_Photo[0].filename;

    // Gallery-Photo
    const gallery = [];
    req.files.productGallery_Photo.forEach((item) => {
      gallery.push(item.filename);
    });

    const data = await Product.create({
      name,
      slug: createSlug(name),
      regular_price,
      sale_price,
      short_desc,
      long_desc,
      stock,
      photo,
      gallery,
      categories,
      tags,
      brands,
    });

    res.status(200).json({
      product: data,
      message: "Product created success",
    });
  } catch (error) {
    next(error);
  }
};

// Get-Single Prodcut-controller.
export const getSingleProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const data = await Product.findOne({ slug });

    res.status(200).json({
      product: data,
      message: "Get single Product success",
    });
  } catch (error) {
    next(error);
  }
};

// Delete-Single Prodcut-controller.
export const deleteSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Product.findByIdAndDelete(id);

    // Delete releted Photo.
    unlinkSync(`api/public/productPhoto/${data.photo}`);

    // Delete releted gallery Photo.
    data.gallery.forEach((item) => {
      unlinkSync(`api/public/productGalleryPhoto/${item}`);
    });

    res.status(200).json({
      product: data,
      message: "Single Product deleted success",
    });
  } catch (error) {
    next(error);
  }
};

// Update-Single Prodcut-controller.
export const updateSingleProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      regular_price,
      sale_price,
      short_desc,
      long_desc,
      stock,
      categories,
      tags,
      brands,
    } = req.body;

    // GetAllData.
    const oldData = await Product.findById(id);

    // Product-Photo.
    let photo = oldData.photo;
    if (req.files.product_Photo) {
      photo = req.files.product_Photo[0].filename;
      unlinkSync(`api/public/productPhoto/${oldData.photo}`);
    } else {
      photo = oldData.photo;
    }

    // product-gallery-Photo.
    let gallery = [];
    if (req.files.productGallery_Photo) {
      oldData.gallery.map((galleryItem) => {
        unlinkSync(`api/public/productGalleryPhoto/${galleryItem}`);
      });

      req.files.productGallery_Photo.map((item) => {
        gallery.push(item.filename);
      });
    } else {
      gallery = oldData.gallery;
    }

    const data = await Product.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
        regular_price,
        sale_price,
        short_desc,
        long_desc,
        stock,
        photo,
        gallery,
        categories,
        tags,
        brands,
      },
      { new: true }
    );
    res.status(200).json({
      product: data,
      message: "Single Product update success",
    });
  } catch (error) {
    next(error);
  }
};


