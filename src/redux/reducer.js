// src/redux/reducer.js

const initialState = {
  movieList: [],
  selectedGenre: '',
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movieList: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
