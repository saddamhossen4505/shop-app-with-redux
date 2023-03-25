import express from "express";
import {
  createTag,
  deleteSingleTag,
  getAllTags,
  getSingleTag,
  updateSingleTag,
} from "../controllers/productTagController.js";

// Init Router.
const router = express.Router();

// Routes.
router.get("/tag", getAllTags);
router.post("/tag", createTag);
router.get("/tag/:id", getSingleTag);
router.delete("/tag/:id", deleteSingleTag);
router.put("/tag/:id", updateSingleTag);
router.patch("/tag/:id", updateSingleTag);

// Export.
export default router;
