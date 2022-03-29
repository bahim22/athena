const { MongoClient } = require("mongodb");
// const assert = require('assert');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  // options?
});

let _db;

// *! OPTION 1 from my MongoClient Repo (Gullo-db)

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db("sample_training");
        console.log("MongoDB connection est bien");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  },
};

// *? PROD Express OPTION

// server/index.js for use in prod/deploy --> will need to add CRUD func/edit req to /api routes
const path = require('path');
const express = require('express');
const app = express();
// other relevant code rm
// express serves files in prod
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route ** will delete, alter **
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});
// GET req unresolved by node will default to client routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


// **todo - client/package.json & server/package.json scripts
/*
/ client
"proxy": "http://localhost:7222",
"rm-git": "rm -rf .git" <!-- if CRA used on client -->
/ server
"start": "node server/index.js",
"build": "cd client && npm install && npm run build"
"engines": { "node": "your-node-version" }
*/

