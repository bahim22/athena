
# Connecting to Mongo db with Mongo Client

## Back-end/db/databaseConnection.js

```js
const { MongoClient } = require("mongodb");
// const assert = require('assert');
const Db = process.env.ATLAS_URI;
// Need to learn more about options and use mongosh
const client = new MongoClient(Db, {
  compressors:number,
  srvMaxHosts: number,
  maxPoolSize: number,
  connectTimeoutMS: number,
  socketTimeoutMS: number,
  maxIdleTimeMS: number,
  maxStalenessSeconds: number,
  waitQueueTimeoutMS: number,
  zlibCompressionLevel: number,
  compressors: ["zlibCompressionLevel" ],
  keepAliveInitialDelay: number,
  connectTimeoutMS: number,
});

let _db;

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
```

## *? PROD Express + MongoDb OPTION

- server/index.js for use in prod/deploy
- will need to add CRUD func/edit req to /api routes

```js
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

// <-------            --------->
// ** OTHER Options for Production server/index.js settings
const express = require('express');
const path = require('path');
// const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(5222);
```

## client/package.json & server/package.json scripts

```json
// client
"proxy": "http://localhost:7222",
"rm-git": "rm -rf .git" <!-- if CRA used on client -->

// server
"start": "node server/index.js",
"build": "cd client && npm install && npm run build"
"engines": { "node": ">v12 || v17.8.0" }
```

## database connection

```js
// db/connection.js Alternate Options

const { MongoClient } = require("mongodb");
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
};
```
