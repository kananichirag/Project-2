const jwt = require("jsonwebtoken");
const UserModel = require("../models/Usermodal");

const ReqiredSignIn = async (req, res, next) => {
  try {
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

const IsAdmin = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        msg: "UnAuthorized Access.!!",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      Error: error,
      msg: "Eror in Admin Middleware",
    });
  }
};

const CheckToken = async (req, res, next) => {
   console.log(req.body);
};

module.exports = {
  ReqiredSignIn,
  IsAdmin,
  CheckToken,
};
