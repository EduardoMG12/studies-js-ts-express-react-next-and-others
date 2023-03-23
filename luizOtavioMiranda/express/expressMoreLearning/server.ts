import express from "express";
import { router } from "./src/Controllers/homeController";
import path from "path";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
import session from "express-session"; //save data for user nagate
import MongoStore from "connect-mongo";
import flash from "connect-flash" //show messages once 
const app: express.Application = express();
dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        app.emit("connect")
        console.log("")
        console.log("\x1B[34myou're connect for data base.\x1B[34m")
        console.log("")
    }).catch(err => console.error(`\x1B[31mERROR:${err}\x1B[31m`));

//config session for save data to the user navegate
app.use(session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, //seven days for update cookie
        httpOnly: true
    }
}))

//config flash messages
app.use(flash())

// config for use post form
app.use(bodyParser.urlencoded({ extended: true }))

app.set("views", path.resolve(__dirname, "src", "views"))
app.set("view engine", "ejs")

// This is a middleware
app.use(bodyParser.json());

app.use("/", router)

app.on("connect", () => {

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`\x1B[32mstart application for port: ${process.env.SERVER_PORT}\x1B[32m`)
        console.log(`\x1B[32m${process.env.URL, process.env.SERVER_PORT}\x1B[32m`)
    })
})