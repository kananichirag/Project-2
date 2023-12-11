const express = require("express");
const ProductRoute = express.Router();
const ProductController = require("../controller/ProductController");
const { ReqiredSignIn, IsAdmin } = require("../middleware/AuthMiddleware");
const formidable = require("express-formidable");

ProductRoute.post(
  "/create-product",
  formidable(),
  ReqiredSignIn,
  IsAdmin,
  ProductController.CreateProduct
);

ProductRoute.patch(
  "/update-product/:pid",
  formidable(),
  ReqiredSignIn,
  IsAdmin,
  ProductController.UpdateProduct
);

ProductRoute.get("/getall-product", ProductController.GetAllProduct);
ProductRoute.get("/get-product/:slug", ProductController.GetSingleProduct);
ProductRoute.get("/product-photo/:pid", ProductController.GetProductPhoto);
ProductRoute.delete("/delete-product/:pid", ProductController.DeleteProduct);

module.exports = ProductRoute;
