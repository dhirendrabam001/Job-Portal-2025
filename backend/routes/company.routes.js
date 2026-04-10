const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");

const {
  companyDataRegister,
  getCompany,
  getCompanyById,
  updateCompany,
} = require("../controllers/company.controller");
const isAuthenticates = require("../middleware/isAuthenticated");

router.post("/companyInfo", isAuthenticates, companyDataRegister);
router.get("/getCompanyData", isAuthenticates, getCompany);
router.get("/getAllCompanyById/:id", isAuthenticates, getCompanyById);
router.put(
  "/updateDataInfo/:id",
  isAuthenticates,
  upload.single("file"),
  updateCompany,
);

module.exports = router;
