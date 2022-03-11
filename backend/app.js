const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

var cors = require("cors");
app.options(
  "*",
  cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 })
);
app.use(cors({ origin: "http://localhost:3001", optionsSuccessStatus: 200 }));

app.listen(port, () => {
  console.log(`server started on port:${port}`);
});

// mongoDB connection

const mongoose = require("mongoose");
const mongoDB = "mongodb://localhost/task";

const connect = async () => {
  try {
    await mongoose.connect(mongoDB);
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
};
connect();

// routes
const userRoutes = require("./controllers/user-controller");
app.use("/users", userRoutes);
