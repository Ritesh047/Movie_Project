import axios from 'axios';

export const SET_SELECTED_GENRE = 'SET_SELECTED_GENRE';
export const SET_MOVIES = 'SET_MOVIES';

// Action to set the selected genre
export const setSelectedGenre = (genre) => ({
  type: SET_SELECTED_GENRE,
  payload: genre,
});

// Action to fetch movies based on genre
export const fetchMoviesByGenre = (genre) => async (dispatch) => {
  const API_KEY = 'b2be4132070fe76775c6808abb6ee36e';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const genreId = genreIdMapping[genre] || ''; // Map genre name to genre ID
  const url = genreId
    ? `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    : `${BASE_URL}/movie/popular?api_key=${API_KEY}`; // Fetch popular movies if no genre is selected

  try {
    const response = await axios.get(url);
    dispatch({ type: SET_MOVIES, payload: response.data.results });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

// Mapping of genre names to genre IDs (replace with actual genre IDs)
const genreIdMapping = {
  Action: 28,
  Comedy: 35,
  Drama: 18,
  Horror: 27,
  Romance: 10749,
  'Sci-Fi': 878,
  Thriller: 53,
  Crime: 80,
};
