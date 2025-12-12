const express = require("express");
const router = express.Router();
const {
  applicationData,
  getAppliedJobs,
  getAdminApplicant,
  updateStatus,
} = require("../controllers/application.controller");
const isAuthenticates = require("../middleware/isAuthenticated");

router.get("/applyJobs/:id", isAuthenticates, applicationData);
router.get("/getAppliedJobInfo/", isAuthenticates, getAppliedJobs);
router.get("/getApplicantAdmin/:id", isAuthenticates, getAdminApplicant);
router.post("/status/:id/updateStatusData", isAuthenticates, updateStatus);

module.exports = router;
