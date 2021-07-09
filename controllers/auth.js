class AuthController {
  static login = (req, res) => {
    console.log("main function called");
    var firstnumber = parseFloat(req.body.first);
    var secondnumber = parseFloat(req.body.second);
    var total = firstnumber + secondnumber;
    console.log(total);
    return res.render("index", { data: [{ data: "name" }, 1, 2, 3, 4] });
    // return res.send("ervpo9ir");
  };
}

module.exports = AuthController;
