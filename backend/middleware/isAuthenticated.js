const jwt = require("jsonwebtoken");

const isAuthenticates = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "User Does Not Authenticated" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(400).json({ success: false, message: "Invalid Token" });
    }

    // if all complete check id
    req.id = decoded.userId;
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = isAuthenticates;
