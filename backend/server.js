const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL (retry logic)
function connectDB() {
  db.connect((err) => {
    if (err) {
      console.log("DB connection failed, retrying...");
      setTimeout(connectDB, 2000);
    } else {
      console.log("Connected to MySQL");
    }
  });
}
connectDB();

// Insert user
app.post("/add-user", (req, res) => {
  const { name, email } = req.body;
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  
  db.query(sql, [name, email], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send("User added successfully");
    }
  });
});

// Get users
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
