// src/redux/reducers/movieReducer.js

const initialState = {
  movies: [],
  selectedGenre: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_GENRE':
      return {
        ...state,
        selectedGenre: action.payload,
      };
    case 'FETCH_MOVIES_BY_GENRE':
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
