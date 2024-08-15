import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography, Box } from '@mui/material';
import MovieCard from './MovieCard';
import { fetchPopularMovies } from '../redux/action';

const MovieGrid = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movieList || []);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {movies.length > 0 ? (
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
          No movies found.
        </Typography>
      )}
    </Box>
  );
};

export default MovieGrid;
