const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const router = require("express").Router();
const { checkLoggedIn } = require("./middlewares/auth");
const AuthController = require("./controllers/auth");

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;

app.set("view engine", "ejs");

//mongodb connection
mongoose.connect(MONGOURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

router.post("/", checkLoggedIn, AuthController.login);

app.use(express.json());

app.use(router);

app.listen(PORT, function () {
  console.log(`app running on port ${PORT}`);
});
