const User = require("../models/User");

class AuthController {
  static login = async (req, res) => {
    const users = await User.find();
    return res.send(users);
  };
}

module.exports = AuthController;
