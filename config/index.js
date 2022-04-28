const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "db1",
  password: "Sahithi#2002",
  port: 5432,
});

// Pool Parameters should be from env varibles..
module.exports = pool;
