const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.connect()
    .then(() => console.log("✅ PostgreSQL connected"))
    .catch(err => console.error("❌ PostgreSQL error:", err.message));

app.get("/", (req, res) => {
    res.json({ message: "Backend + PostgreSQL OK " });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});
