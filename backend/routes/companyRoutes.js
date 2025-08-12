// routes/company.routes.js
const express = require("express");
const {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} = require("../controllers/companyController");

const router = express.Router();

// /api/v1/companies
router.route("/").post(createCompany).get(getCompanies);

// /api/v1/companies/:id
router
  .route("/:id")
  .get(getCompanyById)
  .patch(updateCompany)
  .delete(deleteCompany);

module.exports = router;
