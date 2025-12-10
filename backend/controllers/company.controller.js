const { Company } = require("../models/company.model");

const companyDataRegister = async (req, res) => {
  try {
    const { companyName } = req.body;

    // All field are required
    if (!companyName) {
      return res
        .status(400)
        .json({ success: false, message: "Company Name Required" });
    }

    // check company exit or not
    let company = await Company.findOne({ companyName });
    if (company) {
      return res
        .status(400)
        .json({ success: false, message: "You Can Not Register Same Company" });
    }

    // Save the company name
    company = await Company.create({
      companyName: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      success: true,
      company,
      message: "Company Register Successfully",
    });
  } catch (error) {
    console.error(error);
  }
};

// Get all company
const getCompany = async (req, res) => {
  try {
    const userId = req.id; // logged in user id

    // check company available or not
    const company = await Company.find({ userId });
    if (!company) {
      return res
        .status(401)
        .json({ success: false, message: "Company Does Not Exits" });
    }

    return res.status(200).json({
      success: true,
      company,
      message: "Register Company Data Feteched",
    });
  } catch (error) {
    console.error(error);
  }
};

// Get company by id
const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id; // get id by params

    // find id by company
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(400).json({
        success: false,
        message: "Can Not Found Company Particular Id",
      });
    }

    return res
      .status(200)
      .json({ success: true, company, message: "Here Is Company" });
  } catch (error) {
    console.error(error);
  }
};

// UpdatedCompany
const updateCompany = async (req, res) => {
  try {
    const { companyName, description, website, locations } = req.body;
    const file = req.body;

    //Comes here cloudnauray later

    const updateDataInfo = { companyName, description, website, locations };
    let company = await Company.findByIdAndUpdate(
      req.params.id,
      updateDataInfo,
      { new: true }
    );

    // check the company here or not
    if (!company) {
      return res
        .status(400)
        .json({ success: false, message: "Company Does Not Found" });
    }

    return res.status(200).json({
      success: true,
      company,
      message: "Company Information Updated Successfully",
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  companyDataRegister,
  getCompany,
  getCompanyById,
  updateCompany,
};
