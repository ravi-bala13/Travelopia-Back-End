const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

const userController = require("./controllers/users.controller");

app.use("/users", userController);
module.exports = app;
