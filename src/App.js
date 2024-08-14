import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetails';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
