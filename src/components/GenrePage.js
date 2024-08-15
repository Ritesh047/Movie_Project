import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

const API_KEY = 'b2be4132070fe76775c6808abb6ee36e'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

const genreMapping = {
  action: '28',
  comedy: '35',
  drama: '18',
  horror: '27',
  romance: '10749',
  'sci-fi': '878',
  thriller: '53',
};

const GenrePage = () => {
  const { genre } = useParams();
  const navigate = useNavigate(); // Add useNavigate hook
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        const genreId = genreMapping[genre.toLowerCase()];
        const response = await axios.get(`${BASE_URL}/discover/movie`, {
          params: {
            api_key: API_KEY,
            with_genres: genreId,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        setError('Failed to fetch movies.');
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [genre]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box padding={2}>
      <Typography variant="h4">Genre: {genre}</Typography>
      <Grid container spacing={3}>
        {movies.map(movie => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card onClick={() => navigate(`/movie/${movie.id}`)} style={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                alt={movie.title}
                image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                title={movie.title}
              />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="body2">{movie.release_date}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GenrePage;
