const { Jobs } = require("../models/job.model");
const { Application } = require("../models/application.model");

// JOBS CREATED BY ADMIN
const postJobs = async (req, res) => {
  try {
    const role = req.role;
    if (role !== "recruiter") {
      return res
        .status(404)
        .json({ success: false, message: "Only Admin Can Post Jobs" });
    }
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
    const keyword = req.query.keyword?.trim();

    let query = {};

    if (keyword) {
      const words = keyword.split(" "); // ["Graphics", "Designer"]

      query = {
        $or: words.flatMap((word) => [
          { title: { $regex: word, $options: "i" } },
          { description: { $regex: word, $options: "i" } },
          { locations: { $regex: word, $options: "i" } },
          { jobType: { $regex: word, $options: "i" } },
        ]),
      };
    }

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
    const role = req.role;

    if (role !== "recruiter") {
      return res
        .status(404)
        .json({ success: false, message: "Only Recruiter Can Accessed Jobs" });
    }
    const adminId = req.id; //logged id

    const jobs = await Jobs.find({ created_by: adminId }).populate({
      path: "company",
      createdAt: -1,
    });
    if (!jobs) {
      return res
        .status(400)
        .json({ success: false, message: "Jobs Not Found By Admin" });
    }

    return res.status(200).json({
      success: true,
      totalJobs: jobs.length,
      jobs,
      message: "All Posted Jobs Admin Fetched",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// GET JOBS BY PARTICULAR ID FOR STUDENT
const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    // const userId = req.user._id;
    const userId = req.id; // auth middleware;

    // find userid validate or not
    let job = await Jobs.findById(jobId).populate({
      path: "application",
      // select: "applicant",
    });
    if (!job) {
      return res
        .status(400)
        .json({ success: false, message: "Jobs Are Not Found Particular Id" });
    }
    //  CHECK ISAPPLIED USER OR NOT
    const isApplied = job.application.some(
      (app) => app.applicant.toString() === userId.toString(),
    );

    return res.status(200).json({
      success: true,
      jobs: job,
      isApplied,
      message: "Jobs Fetched By Particular Id",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { postJobs, getAllJobPost, getJobsByAdmin, getJobById };
