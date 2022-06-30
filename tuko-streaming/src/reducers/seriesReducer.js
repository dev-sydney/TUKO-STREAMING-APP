import {
  LOAD_TRENDING_SHOWS,
  SET_LOADING,
  LOAD_TOP_RATED_SHOWS,
  LOAD_SEARCH_SHOWS,
  LOAD_CURRENT,
  LOAD_TRAILER_URL,
  ADD_TO_LIST,
  REMOVE_FROM_lIST,
  IMPORT_LOCAL_STORAGE,
  LOAD_RECOMMENDATION,
} from '../actions/types';

const initialState = {
  loading: false,
  trendingShows: null,
  topRatedShows: null,
  searchTvResults: null,
  current: null,
  trailerURL: null,
  list: [],
  recommendations: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TRENDING_SHOWS:
      return {
        ...state,
        trendingShows: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };
    case LOAD_TOP_RATED_SHOWS:
      return {
        ...state,
        topRatedShows: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };
    case LOAD_TRAILER_URL:
      return {
        ...state,
        trailerURL: action.payload,
        loading: false,
      };
    case LOAD_SEARCH_SHOWS:
      return {
        ...state,
        searchTvResults: action.payload.filter(
          itm => itm.original_title !== 'UNdefined'
        ),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOAD_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case REMOVE_FROM_lIST:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload),
      };
    case IMPORT_LOCAL_STORAGE:
      return {
        ...state,
        list: [...action.payload],
      };
    case LOAD_RECOMMENDATION:
      return {
        ...state,
        recommendations: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
