class AuthController {
  static login = (req, res) => {
    console.log("main function called");
    res.send("index");
  };
}

module.exports = AuthController;
