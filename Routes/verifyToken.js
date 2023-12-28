//Creating a Middleware for user Authentication

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Auth_Token");

  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.existingEmail = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = verifyToken;
