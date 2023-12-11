const express = require("express");
const IndexRoute = express.Router();
const AuthRoutes = require("../routes/AuthRoutes");
const CategoryRoutes = require('../routes/CategoryRoute')
const ProductRoutes = require('../routes/ProductRoutes')

IndexRoute.use("/auth", AuthRoutes);
IndexRoute.use("/category", CategoryRoutes);
IndexRoute.use("/product", ProductRoutes);

module.exports = IndexRoute;
