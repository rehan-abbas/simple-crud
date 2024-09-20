const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(cors());

const userRoute = require("./routes/userRoute.js");

app.use(express.json());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT || 8000, (err) => {
      if (err) console.log(err);
      console.log("sucessfully runing", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
app.use(userRoute);
