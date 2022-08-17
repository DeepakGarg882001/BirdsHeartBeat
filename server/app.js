const express = require("express");
const dotENV = require("dotenv");
const mongoose = require("mongoose");
const https = require('https');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const fs= require("fs");
const path= require("path");





// app.use(https);

// Importing dotENV file
dotENV.config({ path: "./config.env" });
app.use(cookieParser());
const frontUrl = process.env.FRONT_END_URL;
app.use(cors({credentials: true, origin: frontUrl,allowedHeaders:['Content-Type', 'Authorization']}));
require("./DataBase/DB");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./Router/Rootroutes"));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/filesUpload',express.static(path.join(__dirname,'filesUpload')));

// Starting server at PORT No.
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running at PORT NO. : ${PORT}`);
});
