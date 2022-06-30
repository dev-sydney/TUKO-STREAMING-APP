import {
  LOAD_TOP_RATED_SHOWS,
  LOAD_SEARCH_SHOWS,
  LOAD_TRENDING_SHOWS,
  LOAD_CURRENT,
  ADD_TO_LIST,
  REMOVE_FROM_lIST,
  IMPORT_LOCAL_STORAGE,
  LOAD_RECOMMENDATION,
} from './types';

import { TMDB_API_KEY, BASEURL } from './config';
import { setLoading } from './moviesActions';

export const loadTrendingShows = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `${BASEURL}trending/tv/week?api_key=${TMDB_API_KEY}`
    );
    const data = await res.json();
    const { results } = data;

    dispatch({
      type: LOAD_TRENDING_SHOWS,
      payload: results.filter(itm => itm.original_title !== 'UNdefined'),
    });
  } catch (err) {
    console.error(`Error loading Trending Shows`);
  }
};
export const loadTopRatedShows = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `${BASEURL}tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );
    const data = await res.json();
    const { results } = data;

    dispatch({
      type: LOAD_TOP_RATED_SHOWS,
      payload: results.filter(itm => itm.original_title !== 'UNdefined'),
    });
  } catch (err) {
    console.error(`Error loading top rated Shows`);
  }
};

export const loadSearchS = queryString => async dispatch => {
  try {
    setLoading();
    const res = await fetch(
      `${BASEURL}search/tv?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${queryString}`
    );
    const data = await res.json();
    const { results } = data;

    dispatch({
      type: LOAD_SEARCH_SHOWS,
      payload: results.filter(itm => itm.original_title !== 'UNdefined'),
    });
  } catch (err) {
    console.error(`Error loading Search Results Shows${err}`);
  }
};

export const loadCurrent = mvObj => {
  return {
    type: LOAD_CURRENT,
    payload: mvObj,
  };
};

export const addToList = currentName => async dispatch => {
  try {
    console.log(`added ${currentName}`);
    setLoading();
    const res = await fetch(
      `${BASEURL}search/multi?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${currentName}`
    );
    const data = await res.json();
    const { results } = data;
    const [currentContent] = results;

    dispatch({
      type: ADD_TO_LIST,
      payload: currentContent,
    });
  } catch (err) {
    console.error(`Error loading Current: ${err}`);
  }
};
export const addToListM = mvObj => {
  return {
    type: ADD_TO_LIST,
    payload: mvObj,
  };
};

export const removeFromList = objId => {
  return {
    type: REMOVE_FROM_lIST,
    payload: objId,
  };
};

export const loadFromLocalStorage = listFromLocal => {
  return {
    type: IMPORT_LOCAL_STORAGE,
    payload: listFromLocal,
  };
};

export const loadRecommendationsM = media => async dispatch => {
  try {
    //Checking the media(movie/tv)
    let mediaType;
    if (media.first_air_date) mediaType = 'tv';
    if (media.release_date) mediaType = 'movie';

    const res = await fetch(
      `${BASEURL}${mediaType}/${media.id}/recommendations?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );
    const data = await res.json();
    const { results: recommendations } = data;

    dispatch({
      type: LOAD_RECOMMENDATION,
      payload: recommendations,
    });
  } catch (err) {
    console.log(`Error Loading Recommendations:${err}`);
  }
};
