const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingEmail = await User.findOne({ email });
    // console.log(existingEmail);

    if (!existingEmail) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      existingEmail.password
    );

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const userid = existingEmail._id;
    const username = existingEmail.name;
    // console.log(userid);

    //Create a JSON web token
    const token = jwt.sign({ _id: userid }, process.env.TOKEN_SECRET);

    res.status(200).json({
      message: "User successfully signed in",
      userid: userid,
      Auth_Token: token,
      username: username,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
