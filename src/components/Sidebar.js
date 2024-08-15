// src/components/Sidebar.js
import React from 'react';
import { Box, List, ListItem, ListItemText, Divider, Typography, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import MovieIcon from '@mui/icons-material/Movie';

const genres = ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Science', 'Thriller'];

const Sidebar = () => {
  const navigate = useNavigate();

  const genreIcons = {
    Action: <MovieIcon />,
    Comedy: <MovieIcon />,
    Drama: <MovieIcon />,
    Horror: <MovieIcon />,
    Romance: <MovieIcon />,
    Science: <MovieIcon />,
    Thriller: <MovieIcon />,
  };

  const handleGenreClick = (genre) => {
    navigate(`/genre/${genre.toLowerCase()}`); // Navigate to the genre page with genre as URL parameter
  };

  return (
    <Box 
      sx={{ 
        width: '250px', 
        background: 'linear-gradient(to bottom, #000000, #e63946)', 
        color: '#fff', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        height: '100vh', 
        p: 2 
      }}
    >
      {/* Top Section */}
      <Box>
        <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
          Navigation
        </Typography>
        <List>
          <ListItem button onClick={() => navigate('/')}>
            <ListItemIcon>
              <HomeIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Home" sx={{ color: '#fff' }} />
          </ListItem>
          <ListItem button onClick={() => navigate('/favorites')}>
            <ListItemIcon>
              <FavoriteIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Favorites" sx={{ color: '#fff' }} />
          </ListItem>
        </List>
        <Divider sx={{ my: 2, backgroundColor: '#fff' }} />
        <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
          Genres
        </Typography>
        <List>
          {genres.map((genre) => (
            <ListItem button key={genre} onClick={() => handleGenreClick(genre)}>
              <ListItemIcon>
                {genreIcons[genre]}
              </ListItemIcon>
              <ListItemText primary={genre} sx={{ color: '#fff' }} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Bottom Section */}
      <Box sx={{ mt: 'auto' }}>
        <Divider sx={{ mb: 2, backgroundColor: '#fff' }} />
        <List>
          <ListItem button onClick={() => navigate('/settings')}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ color: '#fff' }} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
