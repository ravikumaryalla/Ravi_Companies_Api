const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    industry: {
      type: String,
      enum: [
        "Technology",
        "Finance",
        "Healthcare",
        "Education",
        "Retail",
        "Manufacturing",
        "Hospitality",
        "Media",
        "Agriculture",
        "Transportation",
        "Energy",
        "Government",
        "Non-profit",
        "Entertainment",
        "Real estate",
        "Banking",
        "Other",
      ],
      required: [true, "Industry is required"],
    },
    location: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    foundedYear: {
      type: Number,
    },
    employeeCount: {
      type: Number,
    },
    revenue: {
      type: Number,
    },
    isHiring: {
      type: Boolean,
      default: false,
    },
    companyPhoto: {
      type: String,
    },
    website: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

companySchema.index({ name: "text", location: "text", description: "text" });

module.exports = mongoose.model("Company", companySchema);
