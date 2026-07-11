
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "student_event_db",
  password: "postgres1",
  port: 5432,
});

module.exports = pool;