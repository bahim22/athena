const express = require("express");
const app = express();
const cors = require('cors');
const db = require('./config/db')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
require ('dotenv').config({ path: './config.env'})
const port = process.env.PORT || 5222
// const router = require('/routes')
const uri = process.env.MONGO_URI

// *! add middleware, cors (helmet), routes,  * *
app.use(express.json())
app.use(cors())

db.connect();
// const db = require("./config/db");

// app.listen(port, () => {
//   // perform db connect on server start
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//   });
//   console.log(`Gullo on port: ${port} || port 8080`);
// });
app.listen(port, () => {
    console.log(`server listening on: ${port}` ||  `http://localhost:5222`)
});
// app.use("/api", router)
/* app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  }); */

  // app.get("/", function (req, res, next) {
  //   // Handle the get for this route
  // });

  // app.post("/", function (req, res, next) {
  //   // Handle the post for this route
  // });
