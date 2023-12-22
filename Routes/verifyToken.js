//Creating a Middleware

const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

const verifyToken = (req, res, next) => {

  const publicKey = fs.readFileSync(
		path.join(
			require.main.path,
			"keys",
			"rsa_pub.key"
		),
		"utf8"
	);

  const token = req.header("Auth_Token");

  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(
			token,
			publicKey,
			{ algorithm: "RS256" }
		);
    req.existingEmail = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = verifyToken;
