const express = require("express");
const IndexRoute = express.Router();
const AuthRoutes = require("../routes/AuthRoutes");

IndexRoute.use("/auth", AuthRoutes);

module.exports = IndexRoute;
