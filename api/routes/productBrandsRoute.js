import express from "express";
import {
  createBrand,
  deleteSingleBrand,
  getAllBrands,
  getSingleBrand,
  updateSingleBrand,
  updateBrandStatus,
} from "../controllers/productBrandController.js";
import { productBrandsMulter } from "../utils/multer.js";

// Init Router.
const router = express.Router();

// Routes.
router.get("/brand", getAllBrands);
router.post("/brand", productBrandsMulter, createBrand);
router.get("/brand/:id", getSingleBrand);
router.delete("/brand/:id", deleteSingleBrand);
router.put("/brand/:id", productBrandsMulter, updateSingleBrand);
router.patch("/brand/:id", productBrandsMulter, updateSingleBrand);
router.patch("/brand-status/:id", updateBrandStatus);

// Export.
export default router;
