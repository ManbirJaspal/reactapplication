// routes/paws-routes.js

// Import express
const express = require('express');
// Define the router using the express router
const pawsRouter = express.Router();


// Import the quotesController
const pawsController = require('../controllers/paws-controller');
console.log("inside paws.routes");
// For each route access the correct controller method

// Request all quotes, send it to the / route
//pawsRouter.get('/login', pawsController.login);
pawsRouter.get('/', pawsController.login);


// Export the router
module.exports = pawsRouter;