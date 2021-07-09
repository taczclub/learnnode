const checkLoggedIn = (req, res, next) => {
  console.log("middleware called");
  next();
};

module.exports = { checkLoggedIn };
