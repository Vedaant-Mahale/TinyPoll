const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000; // IMPORTANT for Render

app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Make server listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});