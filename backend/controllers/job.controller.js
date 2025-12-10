const { Jobs } = require("../models/job.model");

const postJobs = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      experience,
      salary,
      locations,
      jobtype,
      position,
      companyId,
    } = req.body;

    // All field are required
    if (
      !title ||
      !description ||
      !requirements ||
      !experience ||
      !salary ||
      !locations ||
      !jobtype ||
      !position ||
      !companyId
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please All Field Are Required" });
    }

    const userId = user.id; // logged in id

    // Create jobs data into the database
    const jobs = await Jobs.create({
      title,
      description,
      requirements: requirements.split(","),
      experience,
      salary: Number(salary),
      locations,
      jobtype,
      position,
      companyId,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { postJobs };
