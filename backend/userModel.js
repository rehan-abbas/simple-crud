const mongoose = require("mongoose");

const UserSchems = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchems);
module.exports = User;
