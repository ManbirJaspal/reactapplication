// Import the database
const db = require('../db/config');

// Instantiate a new object.
// This will interface with the quotes-app database.
// Specifically, the quotes table.
const Paws = {};

// Define methods for the Quote object

// Returns all quotes from the table
Paws.login = () => {
  return db.query(
    `SELECT * FROM student`
  );
};

// Return one quote with the specific id
//Paws.findById = (id) => {
//  return db.oneOrNone(
//    `
//      SELECT * FROM quotes
//      WHERE id = $1
//    `,
//    [id]
//  );
//};

// Export the Quote object
module.exports = Paws;