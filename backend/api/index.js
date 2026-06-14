const dotenv = require("dotenv");
dotenv.config();

const app = require("../src/app");
const connectDB = require("../src/config/db");

let isConnected = false;

async function ensureDbConnection() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
}

module.exports = async (req, res) => {
  await ensureDbConnection();
  return app(req, res);
};