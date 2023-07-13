import express from "express";

// import createProductController from "../controllers/productController.js";
import  {createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFiltersController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController} from "../controllers/productController.js";
import { isAdmin, requireSignIN } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIN,
  isAdmin,
  formidable(),
  createProductController
);
//get products
router.get("/get-product", getProductController);
//single product
router.get("/get-product/:slug", getSingleProductController);
//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//update product routes
router.put(
  "/update-product/:pid",
  requireSignIN,
  isAdmin,
  formidable(),
  updateProductController
);

//filter product ka routes
router.post("/product-filters",productFiltersController);

//product ko count karne k liye
router.get("/product-count",productCountController);

//product per page 

router.get("/product-list/:page",productListController);

//serach product 
router.get("/search/:keyword", searchProductController);

//similar products
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

export default router;
