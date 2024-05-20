const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at ${port} port`);
});
