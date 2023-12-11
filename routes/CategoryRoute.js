const express = require("express");
const CategoryRoute = express.Router();
const CateGoryController = require("../controller/CategoryController");
const { ReqiredSignIn, IsAdmin } = require("../middleware/AuthMiddleware");

CategoryRoute.post(
  "/create-category",
  ReqiredSignIn,
  IsAdmin,
  CateGoryController.CreateCategory
);

CategoryRoute.put(
  "/update-category/:id",
  ReqiredSignIn,
  IsAdmin,
  CateGoryController.UpdateCategory
);

CategoryRoute.get("/getall", CateGoryController.Getall);
CategoryRoute.get("/get-single/:slug", CateGoryController.GetSingle);

CategoryRoute.delete(
  "/delete-category/:id",
  ReqiredSignIn,
  IsAdmin,
  CateGoryController.DeleteCategory
);

module.exports = CategoryRoute;
