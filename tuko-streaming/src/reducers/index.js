import moviesReducer from './moviesReducer';
import seriesReducer from './seriesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  movies: moviesReducer,
  series: seriesReducer,
});
