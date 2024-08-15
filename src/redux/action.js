// src/redux/action.js

export const fetchPopularMovies = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY');
    const data = await response.json();
    dispatch({ type: 'SET_MOVIES', payload: data.results });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
