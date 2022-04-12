const keys = require("./keys");

// Express Application setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres client setup
const { Pool } = require("pg");
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .catch((err) => console.log("PG ERROR", err));
});

//Express route definitions
app.get("/", (req, res) => {
  res.send("Hi 🚀");
});

// get the values
app.get("/values/all", async (req, res) => {
  res.send("Hi all 🚀");
});

app.listen(5000, (err) => {
  console.log("Listening");
});
