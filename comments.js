// Create web server
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Create comments array
const comments = [
  { username: 'Alice', comment: 'Hi, my name is Alice' },
  { username: 'Bob', comment: 'Hi, my name is Bob' }
];

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.json({ status: 'ok' });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
