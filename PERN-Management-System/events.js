
console.log("events.js loaded");

const express = require("express");
const router = express.Router();

console.log("events route loaded");

const pool = require("../db");

// Get all events
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM events");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Add event
router.post("/", async (req, res) => {
  try {
    const { title, description, event_date } = req.body;

    const result = await pool.query(
      "INSERT INTO events(title, description, event_date) VALUES($1,$2,$3) RETURNING *",
      [title, description, event_date]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE event
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, event_date } = req.body;

    const result = await pool.query(
      "UPDATE events SET title=$1, description=$2, event_date=$3 WHERE id=$4 RETURNING *",
      [title, description, event_date, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE event
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM events WHERE id=$1",
      [id]
    );

    res.json("Event Deleted");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;