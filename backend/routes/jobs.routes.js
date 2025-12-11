const express = require("express");
const router = express.Router();

const {
  postJobs,
  getAllJobPost,
  getJobsByAdmin,
  getJobById,
} = require("../controllers/job.controller");
const isAuthenticates = require("../middleware/isAuthenticated");

router.post("/jobPosts", isAuthenticates, postJobs);
router.get("/getJobsByStudent", isAuthenticates, getAllJobPost);
router.get("/getAdminJobs", isAuthenticates, getJobsByAdmin);
router.get("/getJobByIdStudent/:id", isAuthenticates, getJobById);

module.exports = router;
