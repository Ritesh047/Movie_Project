import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './MovieGrid.css';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="movie-grid-item"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      {movie.poster_path ? (
        <CardMedia
          component="img"
          alt={movie.title}
          image={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          title={movie.title}
        />
      ) : (
        <Box className="no-image">
          <Typography>No Image Available</Typography>
        </Box>
      )}
      <CardContent>
        <Typography variant="h6" className="movie-title">{movie.title}</Typography>
        <Typography variant="body2" className="movie-details">{movie.release_date}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
