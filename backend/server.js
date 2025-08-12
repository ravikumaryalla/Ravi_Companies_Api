const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
console.log(process.env.MONGO_URI);

connectDB();

const server = app.listen(process.env.PORT, () =>
  console.log(
    `server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  )
);
