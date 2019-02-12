// models/quotes.js

// Import the database
const db = require('../db/config');

// Instantiate a new object.
// This will interface with the quotes-app database.
// Specifically, the quotes table.
console.log("inside quote model");
const Quote = {};

// Define methods for the Quote object

// Returns all quotes from the table
Quote.findAll = () => {
  return db.query(
    `SELECT * FROM quotes`
  );
};

// Return one quote with the specific id
Quote.findById = (id) => {
  return db.oneOrNone(
    `
      SELECT * FROM quotes
      WHERE id = $1
    `,
    [id]
  );
};

Quote.addQuote = (quote, author) => {
    return db.query(
    `
    INSERT INTO quotes (quote, author) VALUES ($1, $2)`, 
        [quote, author],
        (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Quote added`);
  })
};

// Export the Quote object
module.exports = Quote;