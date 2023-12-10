const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingEmail = await User.findOne({ email });
    const userid = existingEmail._id;
    console.log(userid);

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

    res
      .status(200)
      .json({ message: "User successfully signed in", userid: userid });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
