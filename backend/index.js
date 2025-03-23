// https://www.youtube.com/watch?v=M3XrYq8075A
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: ".env.local" });

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

//  MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Database connection failed: ", err);
  } else {
    console.log("Connected to Database");
  }
});

// app.post("/authenticate", async (req, res) => {
//   const { username } = req.body;
//   return res.json({ username: username, secret: "#Pass004" });
// });

app.listen(3001, () => {
  console.log("Server running on port 3001");
});