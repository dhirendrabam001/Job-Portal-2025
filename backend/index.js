const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const connectDB = require("./config/connection");

// all route require
const useRoute = require("./routes/user.routes");
const companyRoute = require("./routes/company.routes");
const postJobsRoute = require("./routes/jobs.routes");
const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
  origin: "http://localhost:5173/",
  Credentials: true,
};
app.use(cors(corsOption));

// Apis
app.use("/api/user", useRoute);
app.use("/api/company", companyRoute);
app.use("/api/jobs", postJobsRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running port number ${PORT}`);
});
