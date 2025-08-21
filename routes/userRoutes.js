const express = require("express");
const { register, login } = require("../controllers/userController.js");

const router = express.Router();

router.post("/register", register); // user register route
router.post("/login", login); // user login route

module.exports = router;
