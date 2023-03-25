import express from "express";
import {
  createBrand,
  deleteSingleBrand,
  getAllBrands,
  getSingleBrand,
  updateSingleBrand,
} from "../controllers/productBrandController.js";
import { productBrandsMulter } from "../utils/multer.js";

// Init Router.
const router = express.Router();

// Routes.
router.get("/brand", getAllBrands);
router.post("/brand", productBrandsMulter, createBrand);
router.get("/brand/:id", getSingleBrand);
router.delete("/brand/:id", deleteSingleBrand);
router.put("/brand/:id", updateSingleBrand);
router.patch("/brand/:id", updateSingleBrand);

// Export.
export default router;
