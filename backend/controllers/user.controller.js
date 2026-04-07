const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("../utils/cloudinary");
const getDataUri = require("../utils/dataUriParser");

const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;

    // All field are required
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({ success: false, message: "Please All Field Are Required" });
    }

    // CLOUDINARY ATTACHED HERE.....
    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = cloudinary.uploader.upload(fileUri.content);

    // Check email already register or not
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "Email Already Register" });
    }

    // Password Convert
    const hashPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullName,
      email,
      phoneNumber,
      password: hashPassword,
      role,
      profile: {
        profilePhoto: (await cloudResponse).secure_url, // CLOUD PHOTO SAVE HERE..
      },
    });
    return res.status(201).json({
      success: true,
      message: "Account Has Been Created Successfully",
    });
  } catch (error) {
    console.error(error);
  }
};

// loginController
const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // All field are required
    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ success: false, message: "Please All Field Are Required" });
    }

    // Check the user
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Candidate" });
    }

    // compare password
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res
        .status(400)
        .json({ success: false, message: "Password Does Not Matched" });
    }

    // check the roll is corrct
    if (role !== user.role) {
      return res
        .status(400)
        .json({ success: false, message: "Does Not Exits Current Role" });
    }

    // Token generated
    const generateToken = {
      userId: user._id,
    };
    const token = jwt.sign(generateToken, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    // Send Back user frontend
    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    const isProduction = process.env.NODE_ENV === "production";

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: isProduction ? "none" : "lax",
        secure: isProduction,
        maxAge: 24 * 60 * 60 * 1000,
        path: "/",
      })
      .json({ success: true, user, message: `Welcome Back ${user.fullName}` });

    // return res
    //   .status(200)
    //   .cookie("token", token, {
    //     maxAge: 24 * 60 * 60 * 1000,
    //     httpOnly: true,
    //     sameSite: "none",
    //     path: "/",
    //     secure: true,
    //   })
    //   .json({ success: true, user, message: `Welcome Back ${user.fullName}` });
  } catch (error) {
    console.error(error);
  }
};

// Logout
const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ success: true, message: "Logout Successfully" });
  } catch (error) {
    console.error(error);
  }
};

// UpdatedProfile
const updateProfile = async (req, res) => {
  try {
    const file = req.file;

    const userId = req.id; // middleware authentication
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // check userid
    let user = await User.findById(userId);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User Not Found" });
    }

    // 🔥 Ensure profile exists
    if (!user.profile) {
      user.profile = {};
    }

    //  Updated Data Information user if only one field can updated

    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;

    // skils
    if (skills) {
      user.profile.skills = skills.split(",").map((s) => s.trim());
    }

    // RESUME UPLOAD
    // RESUME UPLOAD
    if (file && file.buffer) {
      const fileUri = getDataUri(file);
      console.log("file info", fileUri);

      const cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
        folder: "job-portal/resumes",
        resource_type: "raw",
      });

      console.log("cloudinary response:", cloudResponse);

      if (cloudResponse) {
        user.profile.resume = cloudResponse.secure_url;
        user.profile.resumeOriginalName = file.originalname;
      }
    }
    await user.save();

    userUpdate = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .json({
        success: true,
        user: userUpdate,
        message: "Profile Updated Successfully",
      });
  } catch (error) {
    console.error("Update Profile Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { register, login, logout, updateProfile };
