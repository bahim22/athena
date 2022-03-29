/* const { MongoClient } = require("mongodb");
// const assert = require('assert');
const db = process.env.ATLAS_URI;
const client = new MongoClient(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;


module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db("wavesDev");
        console.log("MongoDB connection est bien");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
}; */

// *! OPTION 1 from my MongoClient Repo (Gullo-db)
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5222;
app.use(cors());
app.use(express.json());
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.ATLAS_URI
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("todoTs").collection("collTs");
  // perform actions on the collection object
  client.close();
});
