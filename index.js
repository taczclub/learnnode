const express = require("express");
const app = express();
require("dotenv").config();
const router = require("express").Router();
const { checkLoggedIn } = require("./middlewares/auth");
const AuthController = require("./controllers/auth");
const bodyParser = require("body-parser");

const PORT = process.env.PORT;

app.set("view engine", "ejs");

router.post("/", checkLoggedIn, AuthController.login);

app.use(bodyParser.json());

app.use(router);

app.listen(PORT, function () {
  console.log(`app running on port ${PORT}`);
});
