import React, { useEffect } from 'react';
import './carosuelStyle.scss';
import ThumbNailComponent from '../thumbnail/ThumbNailComponent';
import {
  loadOriginals,
  loadTrendingMovies,
  loadGenres,
} from '../../actions/moviesActions';
import {
  loadTrendingShows,
  loadTopRatedShows,
  loadFromLocalStorage,
} from '../../actions/seriesActions';

import {
  genreAction,
  genreHorror,
  genreRomance,
  genreComedy,
  genreDocumentary,
} from '../../actions/config';

import { connect } from 'react-redux';

const genreArr = [
  genreAction,
  genreHorror,
  genreRomance,
  genreComedy,
  genreDocumentary,
];

const CarosuelContainer = ({
  //functions for fetching data
  loadTrendingMovies,
  loadOriginals,
  loadTrendingShows,
  loadTopRatedShows,
  loadGenres,
  loadFromLocalStorage,
  //items from the state
  movies: {
    movies,
    trendingMovies,
    horrorMovies,
    actionMovies,
    romanceMovies,
    comedyMovies,
    documentaries,
  },
  series: { trendingShows, topRatedShows, list },
  setIsActive,
}) => {
  useEffect(() => {
    const storage = localStorage.getItem('Lists');
    if (storage) {
      loadFromLocalStorage(JSON.parse(storage));
    }

    loadOriginals();
    loadTrendingMovies();
    ////////////////////////
    genreArr.forEach(gn => loadGenres(gn));
    loadTrendingShows();
    loadTopRatedShows();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="wrapper">
      {list.length > 0 ? <strong>My List</strong> : ''}
      {list.length > 0 ? (
        <div style={{ marginTop: '1em' }} className="thumbnail-container">
          {list.map(mv => {
            if (mv.original_title !== 'UNdefined')
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
        </div>
      ) : (
        ''
      )}
      <strong>TUKO Originals</strong>
      <div style={{ marginTop: '1em' }} className="thumbnail-container">
        {movies &&
          movies.map(mv => {
            if (mv.original_title !== 'UNdefined')
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
      </div>
      {/* <Youtube
        videoId={'WJrO2MzwysE'}
        opts={{
          height: '390',
          width: '100%',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        }}
      /> */}

      <strong>Trending Movies</strong>
      <div style={{ marginTop: '1em' }} className="thumbnail-container">
        {trendingMovies &&
          trendingMovies.map(mv => {
            if (mv.original_title !== 'UNdefined')
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
      </div>

      <strong>Blockbuster Movies</strong>
      <div style={{ marginTop: '1em' }} className="thumbnail-container">
        {actionMovies &&
          actionMovies.map(mv => {
            if (mv.original_title !== 'UNdefined')
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
      </div>

      <strong>Horror Movies</strong>
      <div style={{ marginTop: '1em' }} className="thumbnail-container">
        {horrorMovies &&
          horrorMovies.map(mv => {
            if (mv.original_title !== 'UNdefined')
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
      </div>

      <strong>Trending Tv Shows</strong>
      <div style={{ marginTop: '1em' }} className="thumbnail-container">
        {trendingShows &&
          trendingShows.map(mv => {
            if (mv.original_title !== 'UNdefined')
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
      </div>

      <strong>Comedy Movies</strong>
      <div style={{ marginTop: '1em' }} className="thumbnail-container">
        {comedyMovies &&
          comedyMovies.map(mv => {
            if (mv.original_title !== 'UNdefined')
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
      </div>

      <strong>Top Rated Shows</strong>
      <div style={{ marginTop: '1em' }} className="thumbnail-container">
        {topRatedShows &&
          topRatedShows.map(mv => {
            if (mv.original_title !== 'UNdefined')
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
      </div>

      <strong>Romance </strong>
      <div style={{ marginTop: '1em' }} className="thumbnail-container">
        {romanceMovies &&
          romanceMovies.map(mv => {
            if (mv.original_title !== 'UNdefined')
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
      </div>

      <strong>Documentaries</strong>
      <div style={{ marginTop: '1em' }} className="thumbnail-container">
        {documentaries &&
          documentaries.map(mv => {
            if (mv.original_title !== 'UNdefined')
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  movies: state.movies,
  series: state.series,
});

export default connect(mapStateToProps, {
  loadOriginals,
  loadTrendingMovies,
  loadTrendingShows,
  loadTopRatedShows,
  loadGenres,
  loadFromLocalStorage,
})(CarosuelContainer);
