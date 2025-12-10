const express = require("express");
const router = express.Router();

const {
  register,
  login,
  updateProfile,
  logout,
} = require("../controllers/user.controller");
const isAuthenticates = require("../middleware/isAuthenticated");

router.post("/register", register);
router.post("/login", login);
router.post("/updateProfile", isAuthenticates, updateProfile);
router.get("/logout", logout);

module.exports = router;
