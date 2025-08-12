// controllers/companyController.js
const Company = require("../models/companyModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchasync");

// Create a company
exports.createCompany = catchAsync(async (req, res) => {
  const company = await Company.create(req.body);
  res.status(201).json({ status: "success", data: { company } });
});

// Get all companies (filters + keyword search + sort + fields + pagination)
exports.getCompanies = catchAsync(async (req, res) => {
  console.log("get companies controller");
  const features = new APIFeatures(Company.find(), req.query)
    .filter()
    .search()
    .sort()
    .limitFields()
    .paginate();

  const [companies, total] = await Promise.all([
    features.query,
    // count with the same filter used by the query
    Company.countDocuments(features.query.getFilter()),
  ]);

  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;

  res.status(200).json({
    status: "success",
    results: companies.length,
    pagination: {
      total,
      page,
      pages: Math.max(1, Math.ceil(total / limit)),
      limit,
    },
    data: { companies },
  });
});

// Get a single company by ID
exports.getCompanyById = catchAsync(async (req, res, next) => {
  const company = await Company.findById(req.params.id);
  if (!company) return next(new AppError("Company not found", 404));

  res.status(200).json({ status: "success", data: { company } });
});

// Update a company
exports.updateCompany = catchAsync(async (req, res, next) => {
  const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!company) return next(new AppError("Company not found", 404));

  res.status(200).json({ status: "success", data: { company } });
});

// Delete a company
exports.deleteCompany = catchAsync(async (req, res, next) => {
  const company = await Company.findByIdAndDelete(req.params.id);
  if (!company) return next(new AppError("Company not found", 404));

  res.status(204).json({ status: "success", data: null });
});
