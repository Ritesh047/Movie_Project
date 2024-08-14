import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import AppBar from './AppBar';

const MainLayout = ({ children }) => {
  return (
    <Box
    sx={{
      display: 'flex',
      height: '100vh',
      background: 'linear-gradient(to right, #2c2c2c, #e63946, #000000)',
    }}
  >  
      <Box
        sx={{
          width: '250px',
          backgroundColor: '#444',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
        }}
      >
        <Sidebar />
      </Box>

     
      <Box
        sx={{
          marginLeft: '250px', // Make space for the fixed sidebar
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        
        <Box
          sx={{
            height: '64px', 
            position: 'fixed',
            top: 0,
            left: '250px', 
            right: 0,
            zIndex: 1100, 
            backgroundColor: '#fff', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          }}
        >
          <AppBar />
        </Box>

       
        <Box
          sx={{
            marginTop: '64px', 
            padding: 2,
            flexGrow: 1,
            overflowY: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
