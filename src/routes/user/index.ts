import UserClass from "../../controller/user";

const express = require("express");
const router = express.Router();

const User = new UserClass();

router.get("/", User.getAllUser);
router.put("/:id", User.updateUser);
router.delete("/:id", User.delete);
router.post("/add", User.save);

export = router;