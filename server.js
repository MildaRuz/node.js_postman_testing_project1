const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

const moviesRoutes = require('./routes/moviesRoutes');

app.use('/movies', moviesRoutes);

app.listen(port, () => {
  console.log(`Server is running at ${port} port`);
});
