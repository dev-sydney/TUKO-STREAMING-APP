import {
  LOAD_ORIGINALS,
  SET_LOADING,
  LOAD_TRENDING,
  LOAD_TOP_RATED,
  LOAD_HORROR_MOVIES,
  LOAD_ACTION_MOVIES,
  LOAD_ROMANCE_MOVIES,
  LOAD_COMEDY_MOVIES,
  LOAD_DOCUMENTARIES,
  GENRES_ERROR,
  LOAD_HEADER,
  LOAD_SEARCH_MOVIES,
} from './types';
import {
  genreHorror,
  genreAction,
  genreComedy,
  genreRomance,
  TMDB_API_KEY,
  URL,
  BASEURL,
} from './config';

export const loadOriginals = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `${BASEURL}discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_networks=213`
    );
    const data = await res.json();
    const { results } = data;
    dispatch({
      type: LOAD_ORIGINALS,
      payload: results.filter(itm => itm.original_title !== 'UNdefined'),
    });
  } catch (err) {
    console.error(`Error loading originals ${err}`);
  }
};

export const loadHeader = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `${BASEURL}discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&timezone=America%2FNew_York&include_null_first_air_dates=false&with_networks=213`
    );
    const data = await res.json();
    const { results } = data;

    //Math.floor(Math.random()*5 )
    const headerContent = results[Math.floor(Math.random() * results.length)];

    dispatch({
      type: LOAD_HEADER,
      payload: headerContent,
    });
  } catch (err) {
    console.error(`Error Header content ${err}`);
  }
};
export const loadTrendingMovies = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `${BASEURL}trending/movie/week?api_key=${TMDB_API_KEY}`
    );
    const data = await res.json();
    const { results } = data;
    dispatch({
      type: LOAD_TRENDING,
      payload: results.filter(itm => itm.original_title !== 'UNdefined'),
    });
  } catch (err) {
    console.error(`Error Trending Movies: ${err}`);
  }
};
export const loadTopRatedMovies = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `${BASEURL}movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );
    const data = await res.json();
    const { results } = data;
    dispatch({
      type: LOAD_TOP_RATED,
      payload: results.filter(itm => itm.original_title !== 'UNdefined'),
    });
  } catch (err) {
    console.error(`Error loading Top Rated: ${err}`);
  }
};
export const loadSearchM = queryString => async dispatch => {
  try {
    setLoading();
    //
    const res = await fetch(
      `${BASEURL}search/movie?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${queryString}`
    );
    const data = await res.json();
    const { results } = data;
    dispatch({ type: LOAD_SEARCH_MOVIES, payload: results });
  } catch (err) {
    console.error(`Search Error: ${err}`);
  }
};
export const loadGenres = genreId => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`${URL}=${TMDB_API_KEY}&with_genres=${genreId}`);
    const data = await res.json();
    const { results } = data;

    switch (genreId) {
      case genreAction:
        dispatch({
          type: LOAD_ACTION_MOVIES,
          payload: results.filter(itm => itm.original_title !== 'UNdefined'),
        });
        break;
      case genreComedy:
        dispatch({
          type: LOAD_COMEDY_MOVIES,
          payload: results.filter(itm => itm.original_title !== 'UNdefined'),
        });
        break;

      case genreHorror:
        dispatch({
          type: LOAD_HORROR_MOVIES,
          payload: results.filter(itm => itm.original_title !== 'UNdefined'),
        });
        break;

      case genreRomance:
        dispatch({
          type: LOAD_ROMANCE_MOVIES,
          payload: results.filter(itm => itm.original_title !== 'UNdefined'),
        });
        break;

      case 99:
        dispatch({
          type: LOAD_DOCUMENTARIES,
          payload: results.filter(itm => itm.original_title !== 'UNdefined'),
        });
        break;

      default:
        dispatch({
          type: GENRES_ERROR,
          payload: 'Error Getting Genres',
        });
    }
  } catch (err) {
    console.error(`Error loading Top Rated: ${err}`);
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
