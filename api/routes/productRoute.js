import express from "express";
import { createProduct, getAllProducts } from "../controllers/productController.js";

// Init Router.
const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);

// Export.
export default router;
