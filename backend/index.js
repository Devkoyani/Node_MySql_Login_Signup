const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mySqlPool = require("./config/db");

// Import routes
const route = require("./routes/route");

//configure dotenv
dotenv.config();

//rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use(route);

//port
const port = process.env.PORT;

//conditional listen
mySqlPool
  .query("SELECT 1")
  .then(() => {
    console.log("MySQL is connected");
    // listen
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MySQL connection error:", err);
  });