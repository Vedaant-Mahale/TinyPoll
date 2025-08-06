const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Serve static files from client/dist
app.use(express.static(path.join(__dirname, '../client')));

// Fallback for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
