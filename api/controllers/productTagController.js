import { createSlug } from "../helper/createSlug.js";
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
    const { name } = req.body;
    const tag = await Tag.create({
      name,
      slug: createSlug(name),
    });

    res.status(200).json({
      tags: tag,
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
    const { name } = req.body;
    const data = await Tag.findByIdAndUpdate(
      id,
      {
        name,
        slug: createSlug(name),
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

// Update-SingleTag-Status Controller.
export const updateSingleTagStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const data = await Tag.findByIdAndUpdate(
      id,
      {
        status,
      },
      { new: true }
    );

    res.status(200).json({
      tags: data,
      message: "Single tag status updated success",
    });
  } catch (error) {
    next(error);
  }
};
