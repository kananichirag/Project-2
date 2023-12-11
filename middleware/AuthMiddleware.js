const UserModel = require("../models/Usermodal");
const jwt = require("jsonwebtoken");

const ReqiredSignIn = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decode = jwt.verify(
      token,
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
