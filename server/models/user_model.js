const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email of user is required"],
    unique: [true, "A user is already registered with this email"],
    validate: [validator.isEmail, "A valid email is required"],
  },
  userName: String,
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
