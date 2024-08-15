import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './MovieCard.css'; // Import the CSS file

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="MovieCard" // Apply the MovieCard class
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      {movie.poster_path ? (
        <CardMedia
          component="img"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/w780/${movie.poster_path}`}
          title={movie.title}
        />
      ) : (
        <Box className="no-image">
          <Typography>No Image Available</Typography>
        </Box>
      )}
      <CardContent className="MovieCard-content">
        <Typography variant="h6" className="MovieCard-title">
          {movie.title}
        </Typography>
        <Typography variant="body2" className="MovieCard-overview">
          {movie.release_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
