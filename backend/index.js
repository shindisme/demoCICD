const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'test_db'
});

app.get("/", (req, res) => {
    res.json({ message: "Hello from Backend" });
});
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server running ${port}`);
});
