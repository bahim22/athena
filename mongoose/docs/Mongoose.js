const express = require("express");
const app = express();
const cors = require("cors");

// @ts-ignore
const graphqlHTTP = require("express-graphql");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8080;
app.use(express.json());
const schema = {
  // schema for new db
};
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
  })
);

// get driver connection
// @ts-ignore
const dbo = require("./db");

app.listen(port, () => {
  // perform db connect on server start
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Gullo on port: ${port} || port 8080`);
});

// <---- ///\\\\\\\ ---->
//*todo
// *!  CORS

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "domain.com"); // change to my domain
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function (req, res, next) {
  // Handle the get for this route
});

app.post("/", function (req, res, next) {
  // Handle the post for this route
});

//*? new Mongo Client
//*TODO: compare connection methods used in mongoose, mongoDB
//*TODO: compare Prisma, Apoollo and other ORM's/ODM's

// *? mongoose option (typescript from my todo repo)

//import express, { Express } from "express";import cors from "cors";const app: Express = express();
//import todoRoutes from "./routes";
import mongoose from "mongoose";

// const PORT: string | number = process.env.PORT || 4000;
const PORT = 5222
app.use(cors());
// app.use(todoRoutes);

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster2.ofkfp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
// const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
