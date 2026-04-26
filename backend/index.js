const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/connection");
const app = express();
// ,
const allowedOrigins = [
  "http://localhost:5173",
  "https://hirehub-portal.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (
        allowedOrigins.includes(origin) ||
        origin.startsWith("https://hirehub-portal")
      ) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// all route require
const userRoute = require("./routes/user.routes");
const companyRoute = require("./routes/company.routes");
const postJobsRoute = require("./routes/jobs.routes");
const applicationRoute = require("./routes/application.routes");

// Apis
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/jobs", postJobsRoute);
app.use("/api/application", applicationRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running port number ${PORT}`);
});
