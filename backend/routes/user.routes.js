const express = require("express");
const upload = require("../middleware/multer");
const router = express.Router();

const {
  register,
  login,
  updateProfile,
  logout,
} = require("../controllers/user.controller");
const isAuthenticates = require("../middleware/isAuthenticated");

router.post("/register", upload.single("file"), register);
router.post("/login", login);
router.put(
  "/updateProfile",
  isAuthenticates,
  upload.single("file"),
  updateProfile
);
router.get("/logout", logout);

module.exports = router;
