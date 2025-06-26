const express = require("express");
const { userLogin, userSignup } = require("../controller/controller");
const router = express.Router();

// Login route
router.post("/login", userLogin);

// Signup route
router.post("/signup", userSignup);

module.exports = router;