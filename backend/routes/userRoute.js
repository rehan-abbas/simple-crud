const express = require("express");

const User = require("../userModel");

const router = express.Router();

//create
router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      age: age,
    });
    res.status(201).json({ userAdded });
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error.message });
  }
});

//read
router.get("/", async (req, res) => {
  try {
    const allusers = await User.find();
    res.status(200).json({ allusers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userDelete = await User.findByIdAndDelete({ _id: id });
    res.status(200).json({ userDelete });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
