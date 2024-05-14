require("dotenv").config();

const FRONTEND_URL = process.env.VITE_FRONTEND_URL || "http://localhost:5173";
const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || 1234;
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5432;
const DB_NAME = process.env.DB_NAME || "livingabode";
const DB_DEPLOY =
  process.env.DB_DEPLOY ||
  `postgres://${DB_USER}:${DB_PASSWORD}@${HOST}:${PORT}/${DB_NAME}`;

module.exports = {
  FRONTEND_URL,
  DB_USER,
  DB_PASSWORD,
  HOST,
  PORT,
  DB_NAME,
  DB_DEPLOY,
};
