const express = require("express");
const userRouter = require("./routers/user_router");
const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use((err, req, res, next) => {
  res.status(err.statusCode).json({ status: "failure", message: err.message });
});

module.exports = app;
