const express = require("express");
const AuthRoute = express.Router();
const AuthController = require("../controller/AuthController");
//const { ReqiredSignIn, IsAdmin } = require("../middleware/AuthMiddleware");

AuthRoute.post("/register", AuthController.Register);
AuthRoute.post("/login",AuthController.Login);
// AuthRoute.post("/test", ReqiredSignIn, IsAdmin, AuthController.Test);

module.exports = AuthRoute;
