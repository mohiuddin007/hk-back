"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var user_1 = __importDefault(require("../../controller/user"));
var express = require("express");
var router = express.Router();
var User = new user_1.default();
router.get("/", User.getAllUser);
router.put("/:id", User.updateUser);
router.delete("/:id", User.delete);
router.post("/add", User.save);
module.exports = router;
