const express = require("express");
const app = express();
require("dotenv").config();
const router = require("express").Router();
const { checkLoggedIn } = require("./middlewares/auth");
const AuthController = require("./controllers/auth");

const PORT = process.env.PORT;

router.get("/", checkLoggedIn, AuthController.login);

app.use(router);

app.listen(PORT, function () {
  console.log(`app running on port ${PORT}`);
});
