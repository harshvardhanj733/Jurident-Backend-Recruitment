const User = require("./../models/user_model");
const bcrypt = require("bcrypt");
const CustomError = require("./../custom_error");

exports.signUp = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password, userName } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hashedPass,
      userName,
    });
    res.status(201).json({ status: "success" });
  } catch (err) {
    res.status(500).json({ status: "failure", message: err.message });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new CustomError("Email/password is incorrect", 401);
    }
    res.status(200).json({
      status: "success",
      data: { email: user.email, userName: user.userName },
    });
  } catch (err) {
    if (!err.statusCode) {
      return res.status(500).json({ status: "failure", message: err.message });
    }
    res
      .status(err.statusCode)
      .json({ status: "failure", message: err.message });
  }
};
