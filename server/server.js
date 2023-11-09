const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const mongoose = require("mongoose");
const app = require("./app");
const DB = process.env.MONGODB_URL;
mongoose.connect(DB).then(() => {
  console.log("DB Connection successful");
});

const server = app.listen(8000, () => {
  console.log("app up and running");
});
