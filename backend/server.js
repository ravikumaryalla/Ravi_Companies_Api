const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

process.on("uncaughtException", (err) => {
  console.log(err);
  console.log("UNCAUGHT EXCEPTION! Shutting down the server...");
  process.exit(1);
});
connectDB();

const server = app.listen(process.env.PORT, () =>
  console.log(
    `server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  )
);

process.on("unhandledRejection", (err) => {
  console.log(err);
  console.log("UNHANDLED REJECTION! Shutting down the server...");
  server.close(() => {
    process.exit(1);
  });
});
