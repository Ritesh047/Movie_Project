import React, { useState } from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, InputBase, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Link } from '@mui/material';
import { Search as SearchIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';

const AppBar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MuiAppBar 
        position="static" 
        sx={{
          background: 'linear-gradient(to right, #2c2c2c, #e63946, #000000)', 
          color: '#fff'
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" noWrap>
            Movie Explorer
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              backgroundColor: '#ffffff40', // Slightly transparent white background for the search bar
              borderRadius: 2, 
              flexGrow: 2, 
              mx: 3, // Adjusted to fit better within the AppBar
              px: 1
            }}
          >
            <InputBase 
              placeholder="Search…" 
              sx={{ 
                color: '#fff', // Text color should be white for visibility
                ml: 1, 
                flex: 1 
              }} 
            />
            <IconButton type="submit" sx={{ p: '5px', color: '#fff' }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" startIcon={<AccountCircleIcon />} onClick={handleClickOpen}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </MuiAppBar>

      {/* Login Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="User ID" variant="outlined" fullWidth />
          <TextField label="Password" type="password" variant="outlined" fullWidth />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link href="#" variant="body2" color="primary">
              Forgot Password?
            </Link>
            <Link href="#" variant="body2" color="primary">
              Create Account
            </Link>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AppBar;
