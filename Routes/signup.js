const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.post("/", async (req, res) => {
  //console.log(req.body);

  const { name, email, password } = req.body;

  const existingemail = await User.findOne({ email });
  if (existingemail) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });

  try {
    const newUser = await user.save();
    // console.log(newUser);
    const userid = newUser._id;
    res
      .status(200)
      .json({ message: "User created successfully", userid: userid });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
