const jwt = require("jsonwebtoken");

const isAuthenticates = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized - No Token",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.id = decoded.userId;
    req.role = decoded.role;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message: "Authentication Failed",
    });
  }
};

module.exports = isAuthenticates;
