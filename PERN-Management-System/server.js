const express = require("express");
const cors = require("cors");
const pool = require("./db");
const eventRoutes = require("./routes/events");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/events", eventRoutes);

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.log("Database connection failed");
    console.log(err);
  } else {
    console.log("Database connected");
  }
});

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

