
# Notes for MongoDb with MongoClient || Mongoose ODM

1. connection
   1. database
   2. server
2. models and schemas
3. routes

## Connections

```ts
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config ({ path: "./config.env" });
import express from "express";
import cors from "cors";
//import { graphqlHTTP } from "express-graphql";

const ConnectionOptions: mongoose.ConnectionOptions = {
/* //** ! already set in uri string from dotenv
    authSource: "admin", dbName: "sample_training", user: "admin", pass : password, */

    useCreateIndex: true,// Use createIndex instead of ensureIndex
    ensureIndexes: true, // Make sure indexes are created, default: false
    autoCreate: true,
        /** Set to `true` to make Mongoose auto call `createCollection()`\
         *  on every model created on this connection. */

    bufferCommands: false,// Buffer commands in the driver's queue
    bufferMaxEntries: 0,// The maximum size of the command queue

    reconnectTries: 2, //Number.MAX_VALUE,
    reconnectInterval: 500, //1000,
    poolSize: 2, // Maintain up to 10 socket connections

    //*? { !connected ? reconnectTries:0 &&  console.errors : reconnectTries:Number.MAX_VALUE }
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 6 | 4,
    // OPTIONS => Use IPv4, fallback to IPv6 || Use IPv4, skip trying IPv6 || Use IPv6 if available, fallback to IPv4
    timestamps: true,

    // *? the below options are implied to be default value & aren't coded in
    // useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
};

<---------------------------------------------                      ----------------------->
// **! Setup of mongoose connection for v6
function createConnection(uri: string, options?: mongoose.ConnectOptions): mongoose.Connection {
    return mongoose.createConnection(uri, options);
}
// create example
await mongoose.connect(process.env.MONGO_URI).asPromise(); // or
await mongoose.createConnection(uri).asPromise();

Connect function will have (uri: string || env var param, + options?: ConnectOptions with callback: CallbackWithoutResult): void or connect(uri, options): Promise<Mongoose>
```

## Models

```ts
Schema(definition?: { [path: string]: mongoose.SchemaDefinitionProperty<undefined>; } | { [x: string]: mongoose.SchemaDefinitionProperty<any>; }, options?: mongoose.SchemaOptions): mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>
```

- Schema

## Routes
