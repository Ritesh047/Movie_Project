import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const API_KEY = 'b2be4132070fe76775c6808abb6ee36e';
const BASE_URL = 'https://api.themoviedb.org/3';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
