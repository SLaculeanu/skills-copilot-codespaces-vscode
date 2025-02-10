// Create web server with express
const express = require('express');
const app = express();
// Set up express to use the body-parser package
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create an array to store comments
let comments = [];

// Handle GET request to /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Handle POST request to /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start server
app.listen(4001, () => {
  console.log('Server listening on port 4001');
});
// The server is now running on port 4001 and has two endpoints to handle GET and POST requests to /comments.