import {
  LOAD_HEADER,
  LOAD_ORIGINALS,
  SET_LOADING,
  LOAD_TRENDING,
  LOAD_TOP_RATED,
  LOAD_HORROR_MOVIES,
  LOAD_ACTION_MOVIES,
  LOAD_ROMANCE_MOVIES,
  LOAD_COMEDY_MOVIES,
  LOAD_DOCUMENTARIES,
  LOAD_SEARCH_MOVIES,
} from '../actions/types';
const initialState = {
  headerContent: null,
  movies: null,
  trendingMovies: null,
  topRatedMovies: null,
  horrorMovies: null,
  actionMovies: null,
  romanceMovies: null,
  comedyMovies: null,
  documentaries: null,
  loading: false,
  searchResultsMovies: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HEADER:
      return {
        ...state,
        headerContent: action.payload,
        loading: false,
      };
    case LOAD_ORIGINALS:
      return {
        ...state,
        movies: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };
    case LOAD_TRENDING:
      return {
        ...state,
        trendingMovies: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };
    case LOAD_TOP_RATED:
      return {
        ...state,
        topRatedMovies: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };
    case LOAD_ACTION_MOVIES:
      return {
        ...state,
        actionMovies: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };
    case LOAD_COMEDY_MOVIES:
      return {
        ...state,
        comedyMovies: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };
    case LOAD_HORROR_MOVIES:
      return {
        ...state,
        horrorMovies: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };
    case LOAD_ROMANCE_MOVIES:
      return {
        ...state,
        romanceMovies: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };
    case LOAD_DOCUMENTARIES:
      return {
        ...state,
        documentaries: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SEARCH_MOVIES:
      return {
        ...state,
        searchResultsMovies: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
