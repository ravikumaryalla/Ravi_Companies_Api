import dotenv from "dotenv";
import connectDB from "../config/db.js";
import Company from "../models/companyModel.js";
dotenv.config({ path: "./config/config.env" });
import data from "../data/companyData.js";

await connectDB();

const importData = async () => {
  try {
    await Company.deleteMany({});
    await Company.create(data);
    console.log("Data Imported");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
