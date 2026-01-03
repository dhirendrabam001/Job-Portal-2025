const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/connection");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// all route require
const userRoute = require("./routes/user.routes");
const companyRoute = require("./routes/company.routes");
const postJobsRoute = require("./routes/jobs.routes");
const applicationRoute = require("./routes/application.routes");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://job-portal-bi00.onrender.com"],
    credentials: true,
  })
);

// app.use(
//   cors({
//     origin: ["http://localhost:5173", "https://job-portal-bi00.onrender.com"],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// app.options("*", cors());

// Apis
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/jobs", postJobsRoute);
app.use("/api/application", applicationRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running port number ${PORT}`);
});
