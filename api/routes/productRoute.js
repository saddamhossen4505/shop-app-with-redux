import express from "express";
import {
  createProduct,
  deleteSingleProduct,
  getAllProducts,
  getSingleProduct,
  updateSingleProduct,
} from "../controllers/productController.js";
import { productMulter } from "../utils/multer.js";

// Init Router.
const router = express.Router();

router.route("/").get(getAllProducts).post(productMulter, createProduct);
router.route("/:slug").get(getSingleProduct);
router
  .route("/:id")
  .delete(deleteSingleProduct)
  .put(productMulter, updateSingleProduct)
  .patch(productMulter, updateSingleProduct);

// Export.
export default router;
