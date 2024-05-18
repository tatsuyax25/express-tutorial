// Require express
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)

// Mount middleware (app.use)

// Mount routes (app.use)
// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/home', function (req, res) {
  res.send('<h1>Home Page</h1>');
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function() {
  console.log('Listening on port 3000');
});