//const express = require("express");

import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/user";

const app = express();

//Custom middleware Logger
// const customLogger = (message) => (req, res, next) => {
//   console.log(`Hello from ${message}`);
//   next();
// };

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(customLogger("custom logger"));

//Custom middleware
// app.use((req,res,next) => {
//   req.secret = 'doggy'

//   next()
// })

app.get("/", (req, res, next) => {
  res.json({
    message: "hello",
  });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signin);

app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({
      message: "Unauthorized",
    });
  } else if (err.type === "input") {
    res.status(400).json({
      message: "Invalid input",
    });
  } else {
    res.status(500).json({
      message: "Unexpected error happened",
    });
  }
});

//module.exports = app
export default app;
