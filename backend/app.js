const express = require("express");
const app = express();
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const companyRoutes = require("./routes/companyRoutes");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use(errorHandler);

app.use("/api/v1/companies", companyRoutes);

module.exports = app;
