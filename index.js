const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const IndexRoutes = require("./routes/IndexRoutes");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const cors = require("cors");

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());
app.use("/v1", IndexRoutes);

// Connections

mongoose
  .connect(process.env.MONGO_URL || 9090)
  .then((e) => console.log("Mongodb Connected.!!"))
  .catch((err) => console.log("Connecting Error ==>", err));

app.listen(process.env.PORT || 9090, () =>
  console.log(`Server Start at ${process.env.PORT}`)
);
