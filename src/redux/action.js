// src/redux/action.js

export const setSelectedGenre = (genre) => ({
  type: 'SET_SELECTED_GENRE',
  payload: genre,
});

export const fetchMoviesByGenre = (genre) => {
  return async (dispatch) => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/${genre}/movies?api_key=YOUR_API_KEY`);
    const data = await response.json();

    dispatch({
      type: 'FETCH_MOVIES_BY_GENRE',
      payload: data.results,
    });
  };
};
