const { Jobs } = require("../models/job.model");

// JOBS CREATED BY ADMIN
const postJobs = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      experience,
      salary,
      locations,
      jobType,
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
      !jobType ||
      !position ||
      !companyId
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Please All Field Are Required" });
    }

    const userId = req.id; // logged in id

    // Create jobs data into the database
    const jobs = await Jobs.create({
      title,
      description,
      requirements: requirements.split(","),
      experience,
      salary: Number(salary),
      locations,
      jobType,
      position,
      company: companyId,
      created_by: userId,
    });

    res.status(201).json({
      success: true,
      jobs,
      message: "Job Has Been Created Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// GET ALL POST JOBS FOR STUDENT

const getAllJobPost = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    // find by query
    const jobs = await Jobs.find(query).populate({ path: "company" });
    //populate used when i dont want company id i want to show company all the information so we can use populate
    if (!jobs) {
      return res
        .status(400)
        .json({ success: false, message: "Jobs Can Not Found" });
    }

    return res
      .status(200)
      .json({ success: true, jobs, message: "All Jobs Are Fetched" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// HOW MANY JOBS POST BY ADMIN
const getJobsByAdmin = async (req, res) => {
  try {
    const adminId = req.id; //logged id
    const jobs = await Jobs.find({ created_by: adminId });
    if (!jobs) {
      return res
        .status(400)
        .json({ success: false, message: "Jobs Not Found By Admin" });
    }

    return res
      .status(200)
      .json({ success: true, jobs, message: "All Posted Jobs Admin Fetched" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// GET JOBS BY PARTICULAR ID FOR STUDENT
const getJobById = async (req, res) => {
  try {
    const userId = req.params.id;
    // find userid validate or not
    const jobs = await Jobs.findById(userId);
    if (!jobs) {
      return res
        .status(400)
        .json({ success: false, message: "Jobs Are Not Found Particular Id" });
    }

    return res
      .status(200)
      .json({ success: true, jobs, message: "Jobs Fetched By Particular Id" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { postJobs, getAllJobPost, getJobsByAdmin, getJobById };
