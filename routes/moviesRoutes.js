const express = require('express');
const moviesRouter = express.Router();

let movies = [];

// Create a new movie
moviesRouter.post('/', (req, res) => {
  const { title, productionDate, producer, rating } = req.body;
  const newMovie = { id: movies.length + 1, title, productionDate, producer, rating };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

// Get all movies
moviesRouter.get('/', (req, res) => {
  res.json(movies);
});

// Get a single movie by ID
moviesRouter.get('/:id', (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movie = movies.find((m) => m.id === movieId);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

// Update a movie by ID
moviesRouter.put('/:id', (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const { title, productionDate, producer, rating } = req.body;
  const movieIndex = movies.findIndex((m) => m.id === movieId);
  if (movieIndex !== -1) {
    const updatedMovie = { id: movieId, title, productionDate, producer, rating };
    movies[movieIndex] = updatedMovie;
    res.json(updatedMovie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

// Delete a movie by ID
moviesRouter.delete('/:id', (req, res) => {
  const movieId = parseInt(req.params.id, 10);
  const movieIndex = movies.findIndex((m) => m.id === movieId);
  if (movieIndex !== -1) {
    movies = movies.filter((m) => m.id !== movieId);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

module.exports = moviesRouter;
