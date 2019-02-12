// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// server.js
const qRoutes = require('./routes/quote-routes');
// API Routes
app.use('/api/quotes', qRoutes);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post('/api/quotes', qRoutes);

 

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});