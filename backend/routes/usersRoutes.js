const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// get all users:
router.get("/", async (req, res) => {
  try {
    let userList = await User.find();
    res.send(userList);
  } catch (error) {
    console.log(error);
    res.status(400).send("cannot get users list");
  }
});

// get user by id:
router.get("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send("cannot get user");
  }
});

// update user:
router.put("/:id", async (req, res) => {
  try {
    const userExist = await User.findById(req.params.id);
    let newPassword;
    if (req.body.password) {
      newPassword = bcrypt.hashSync(req.body.password, 10);
    } else {
      newPassword = userExist.password;
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        password: newPassword,
        gender: req.body.gender,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        address: req.body.address,
        image: req.body.image,
      },
      // { useFindAndModify: false }
      { new: true }
    );
    res.json({ response: updatedUser, message: "user updated" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error, message: " user cannot be updated" });
  }
});

// delete user:
router.delete("/:id", async (req, res) => {
  try {
    let user = await User.findByIdAndRemove(req.params.id);
    if (user) {
      res.json({ success: true, message: "the user is deleted!" });
    } else {
      res.status(404).json({ success: false, message: "user not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("cannot get user");
  }
});

// create new user
router.post("/register", async (req, res) => {
  try {
    let newUser = new User({
      role: req.body.role,
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      gender: req.body.gender,
      phone: req.body.phone,
      address: req.body.address,
      image: req.body.image,
    });

    const response = await newUser.save();
    res.json({
      response,
      message: "user created",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("user cannot be created");
  }
});

// user login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.SECRET;
  console.log(secret);

  if (!user) {
    res.status(400).send("bad credentials");
  }
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = jwt.sign(
      {
        user: user.id,
        role: user.role,
        name: user.name,
      },
      secret,
      { expiresIn: "1d" }
    );
    res.status(200).json({
      _id: user._id,
      name: user.name,
      user: user.email,
      role: user.role,
      token: token,
    });
  } else {
    res.status(400).send("bad credentials");
  }
});

module.exports = router;
