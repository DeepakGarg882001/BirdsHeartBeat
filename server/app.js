const express = require("express");
const dotENV = require("dotenv");
const mongoose = require("mongoose");
const https = require('https');
const cookieParser = require("cookie-parser");

const app = express();






app.use(https);

// Importing dotENV file
dotENV.config({ path: "./config.env" });
app.use(cookieParser());

require("./DataBase/DB");
app.use(express.json());
app.use(require("./Router/Rootroutes"));


// Starting server at PORT No.
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at PORT NO. : ${PORT}`);
});
