const UserModel = require("../models/Usermodal");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(200).send({
        success: false,
        msg: "Already Register Please Login.!!",
      });
    } else {
      const hashedPassword = await bcrypt.hashSync(password, 10);
      const newUser = await new UserModel({
        name,
        email,
        phone,
        password: hashedPassword,
      }).save();

      res.status(200).send({
        success: true,
        msg: "Register Successfully.!!!",
        user: newUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error in Register.!!",
      error: error,
    });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        msg: "Invalid Email or Password.!!!",
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        msg: "Email is not Registered.!!",
      });
    }
    const Match = await bcrypt.compare(password, user.password);

    if (!Match) {
      return res.status(200).send({
        success: false,
        msg: "Invalid Password.!!!",
      });
    }

    // Token

    const token = await jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    res.status(200).send({
      success: true,
      msg: "Login Successfully..!!!",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        _id: user._id,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      msg: "Error in Login.!!",
      error: error,
    });
  }
};

module.exports = {
  Register,
  Login,
};
