const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  //checks if the user had a jwt token
  if (!token) {
    return res.status(401).json({ msg: "No Token, Authorization Denied" });
  }

    try {
      //sents the decoded jwt 
    const decoded = jwt.verify(token, process.env.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token Invalid" });
  }
};
