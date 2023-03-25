import express from "express";
import {
  createProductCategory,
  deleteSingleProductCategory,
  getAllCategory,
  getSingleProductCategory,
  updateSingleProductCategory,
} from "../controllers/productCategoryController.js";
import { productCategoryMulter } from "../utils/multer.js";

// Init Router.
const router = express.Router();

// Routes.
router.get("/category", getAllCategory);
router.post("/category", productCategoryMulter, createProductCategory);
router.get("/category/:id", getSingleProductCategory);
router.delete("/category/:id", deleteSingleProductCategory);
router.patch("/category/:id", updateSingleProductCategory);
router.put("/category/:id", updateSingleProductCategory);

// Export.
export default router;
