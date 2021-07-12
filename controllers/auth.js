const User = require("../models/User");

class AuthController {
  static login = async (req, res) => {
    const user = User({
      name: "Himashu",
    });
    await user.save();

    return res.send("ervpo9ir");
  };
}

module.exports = AuthController;
