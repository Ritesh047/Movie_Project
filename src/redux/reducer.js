import { SET_SELECTED_GENRE, SET_MOVIES } from './action';

const initialState = {
  selectedGenre: '',
  movieList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_GENRE:
      return {
        ...state,
        selectedGenre: action.payload,
      };
    case SET_MOVIES:
      return {
        ...state,
        movieList: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
