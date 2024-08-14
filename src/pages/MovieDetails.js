import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, Button, Card, CardContent, CardMedia, Grid } from '@mui/material';
import axios from 'axios';
import './MovieDetail.css';

const API_KEY = 'b2be4132070fe76775c6808abb6ee36e';
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!movie) {
    return <Typography variant="h6">Movie not found.</Typography>;
  }

  return (
    <Box className="movie-detail-container">
      <Card className="movie-card">
        {movie.backdrop_path ? (
          <CardMedia
            component="img"
            alt={movie.title}
            image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            title={movie.title}
            className="movie-poster"
          />
        ) : (
          <Box className="no-image">
            <Typography>No Image Available</Typography>
          </Box>
        )}
        <CardContent className="movie-card-content">
          <Typography variant="h4" className="movie-title">{movie.title}</Typography>
          <Typography variant="body1" className="movie-summary">{movie.overview}</Typography>
          <Box className="movie-details">
            <Typography variant="body2">Release Date: {movie.release_date}</Typography>
            <Typography variant="body2">Rating: {movie.vote_average}</Typography>
            <Typography variant="body2">Genres: {movie.genres.map(genre => genre.name).join(', ')}</Typography>
            <Typography variant="body2">Runtime: {movie.runtime} minutes</Typography>
          </Box>
        </CardContent>
      </Card>

      <Box className="actors-section">
        <Typography variant="h5" className="section-title">Actors</Typography>
        <Grid container spacing={2}>
          {movie.credits.cast.map(actor => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={actor.id}>
              <Card className="actor-card">
                {actor.profile_path ? (
                  <CardMedia
                    component="img"
                    alt={actor.name}
                    image={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                    title={actor.name}
                    className="actor-image"
                  />
                ) : (
                  <Box className="no-image">
                    <Typography>No Image Available</Typography>
                  </Box>
                )}
                <CardContent className="actor-content">
                  <Typography variant="body2">{actor.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button variant="contained" className="go-back-button" onClick={() => window.history.back()}>
        Go Back
      </Button>
    </Box>
  );
};

export default MovieDetail;
