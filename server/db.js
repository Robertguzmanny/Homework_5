// Connect to Postgres using the node-postgres package

const POOL = require("pg").Pool;

const pool = new POOL({
  user: "robertguzman",
  password: "Civic1234",
  host: "localhost",
  port: 5432,
  database: "favlinkss",
});

module.exports = pool;

// Create all the functions that will be our request handlers in our express server

// Create a new link in the db

// Read all the data from db

// const getLinks = (req, res) => {
//   pool.query("SELECT * FROM links ORDER BY id ASC", (error, result) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(result.rows);
//   });
// };

// Update link in the db

// Delete link in the db

// module.exports = {
//   getLinks,
// };
