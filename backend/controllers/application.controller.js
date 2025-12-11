const { Application } = require("../models/application.model");
const { Jobs } = require("../models/job.model");

const applicationData = async (req, res) => {
  try {
    const userId = req.body;
    const jobId = req.params.id;

    // Check jobs id find or not
    if (!jobId) {
      return res
        .status(400)
        .json({ success: false, message: "Job Id Does Not Found" });
    }

    // Check the user already apply for this job or not
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res
        .status(400)
        .json({ success: false, message: "You Are Already This Jobs" });
    }

    // Check the jobs exits or not
    const jobs = await Application.findById(jobId);
    if (!jobs) {
      return res
        .status(400)
        .json({ success: false, message: "Jobs Does Not Found" });
    }

    // Create a new jobs
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    // new jobs push
    Jobs.application.push(newApplication);
    await Jobs.save();

    return res.status(200).json({
      success: true,
      jobs,
      message: "Job Applied Successfully",
    });
  } catch (error) {
    console.error(error);
    re.status(500).json({ success: false, message: "Server Error" });
  }
};

// GET ALL APPLIED JOBS HERE
const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.body;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { createdAt: -1 },
        populate: { path: "company" },
        options: { createdAt: -1 },
      });

    if (!application) {
      return res
        .status(400)
        .json({ success: flase, message: "Appied Jobs Can Not Found" });
    }

    return res.status(200).json({
      success: true,
      application,
      message: "All Application Jobs Are Fetched",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// ADMIN CHECK HOW MANY STUDENTS CAN APPLIED THIS JOBS
const getAdminApplicant = async (req, res) => {
  try {
    const jobId = req.params.id;
    const jobs = await Jobs.findById(jobId).populate({
      path: "application",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });

    if (!jobs) {
      return res
        .status(400)
        .json({ success: false, message: "Admin Jobs Are Not Founds" });
    }

    return res
      .status(200)
      .josn({ success: true, jobs, message: "All Admin Jobs Fetched" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { applicationData, getAppliedJobs, getAdminApplicant };
