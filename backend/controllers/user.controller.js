const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;

    // All field are required
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({ success: false, message: "Please All Field Are Required" });
    }

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
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({ success: true, user, message: `Welcome Back ${user.fullName}` });
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
    const { fullName, email, phoneNumber, bio, skills } = req.body;

    // check all field are required or not
    // if (!fullName || !email || !phoneNumber || !bio || !skills) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Please All Field Are Required" });
    // }

    // Cloudnoury file comes here lates

    // Convert string to array
    let arraySkills;
    if (skills) {
      arraySkills = skills.split(",");
    }
    const userId = req.id; // middleware authentication
    // req.user._id;
    // check userid
    let user = await User.findById(userId);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User Not Found" });
    }
    //  Updated Data Information user if only one field can updated

    if (fullName) user.fullName = fullName;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (arraySkills) user.profile.skills = arraySkills;

    //   Resume Comes Here Later

    await user.save();

    user = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .json({ success: true, user, message: "Profile Updated Successfully" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { register, login, logout, updateProfile };
