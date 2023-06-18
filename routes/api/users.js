const express = require("express");

const { signup } = require("../../ctrls/usersControllers");

const userValidator = require("../../middlewares/validation/userValidator");

const routerUser = express.Router();

routerUser.post("/signup", userValidator, signup);

routerUser.post("/login");

routerUser.post("/logout");

routerUser.get("/current");

module.exports = routerUser;
