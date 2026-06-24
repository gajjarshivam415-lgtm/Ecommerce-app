import express from "express";
import {
  createProduct,
  getAllProduct,
  UpdateProduct,
  DeleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/getAll", getAllProduct);
router.put("/update/:id", UpdateProduct);
router.delete("/delete/:id", DeleteProduct);

export default router