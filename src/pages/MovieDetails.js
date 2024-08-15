import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress, IconButton, Card, CardContent, CardMedia, Grid, Modal } from '@mui/material';
import axios from 'axios';
import './MovieDetail.css';

const API_KEY = 'b2be4132070fe76775c6808abb6ee36e';
const BASE_URL = 'https://api.themoviedb.org/3';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trailerKey, setTrailerKey] = useState(null);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`);
        setMovie(response.data);

        const trailer = response.data.videos.results.find(
          video => video.type === 'Trailer' && video.site === 'YouTube'
        );
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const handleTrailerOpen = () => {
    setIsTrailerOpen(true);
  };

  const handleTrailerClose = () => {
    setIsTrailerOpen(false);
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!movie) {
    return <Typography variant="h6">Movie not found.</Typography>;
  }

  const backgroundImage = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
    : 'https://via.placeholder.com/1920x1080?text=No+Image+Available';

  return (
    <Box className="movie-detail-container">
      <Box
        className="movie-detail-background"
        sx={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <Box className="movie-detail-overlay" />
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

      {/* Emoji Buttons Section */}
      <Box className="buttons-section" sx={{ mt: 2, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <IconButton onClick={() => console.log('User Score')} title="User Score">
          ⭐️
        </IconButton>
        <IconButton onClick={() => console.log('Add to List')} title="Add to List">
          ➕
        </IconButton>
        <IconButton onClick={() => console.log('Mark as Favorite')} title="Mark as Favorite">
          ❤️
        </IconButton>
        <IconButton onClick={handleTrailerOpen} title="Play Trailer">
          ▶️
        </IconButton>
      </Box>

      <Box className="actors-section" sx={{ mt: 4 }}>
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

      {/* Trailer Modal */}
      <Modal
        open={isTrailerOpen}
        onClose={handleTrailerClose}
        aria-labelledby="trailer-modal-title"
        aria-describedby="trailer-modal-description"
        className="trailer-modal"
      >
        <Box className="trailer-video-container">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
      <IconButton variant="contained" className="go-back-button" onClick={() => window.history.back()} title="Go Back">
        ⬅️Back
      </IconButton>
    </Box>
  );
};

export default MovieDetail;
