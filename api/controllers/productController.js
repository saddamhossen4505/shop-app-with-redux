import { createSlug } from "../helper/createSlug.js";
import Product from "../models/ProductModel.js";

// Get AllProducts.
export const getAllProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      products: data,
      message: "Get all Products success",
    });
  } catch (error) {
    next(error);
  }
};

// Get AllProducts.
export const createProduct = async (req, res, next) => {
  try {
    const { name } = req.body;

    console.log(createSlug(name));

    // const data = await Product.find();
    // res.status(200).json({
    //   products: data,
    //   message: "Get all Products success",
    // });
  } catch (error) {
    next(error);
  }
};
