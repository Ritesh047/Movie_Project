import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { searchMovies } from '../api'; // Updated import path

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const movies = await searchMovies(query);
    setResults(movies);
    setLoading(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="Search for movies"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>

      {loading && <p>Loading...</p>}

      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        {results.map((movie) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <Card>
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
    </div>
  );
};

export default MovieSearch;
