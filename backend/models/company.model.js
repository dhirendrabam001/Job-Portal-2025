const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    website: {
      type: String,
    },
    locations: {
      type: String,
    },
    logo: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);
module.exports = {
  Company,
};
