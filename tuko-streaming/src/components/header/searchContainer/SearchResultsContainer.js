import React, { useRef, useState, useEffect } from 'react';
import './searchStyle.scss';
import ThumbNailComponent from '../../thumbnail/ThumbNailComponent';
import ModalWindow from '../../modal/ModalWindow';
import { NavLink } from 'react-router-dom';

import { loadSearchM } from '../../../actions/moviesActions';
import { loadSearchS } from '../../../actions/seriesActions';

import { connect } from 'react-redux';

const SearchResultsContainer = ({
  loadSearchM,
  loadSearchS,
  movies: { searchResultsMovies },
  series: { searchTvResults },
}) => {
  useEffect(() => {
    return () => {
      if (searchResultsMovies || searchTvResults) {
        searchTvResults = [];
        searchResultsMovies = [];
      }
    };
  }, []);
  const searchInput = useRef('');
  const [isActive, setIsActive] = useState(false);

  const onChange = () => {
    [loadSearchS, loadSearchM].forEach(fn => fn(searchInput.current.value));
  };

  return (
    <div className="search-container">
      {isActive && <ModalWindow setIsActive={setIsActive} />}
      <form className="search-form">
        <i
          className="material-icons md-48 search-icn"
          style={{ color: 'lightgray' }}
        >
          search
        </i>
        <input
          className="search-input"
          type="search"
          ref={searchInput}
          onChange={onChange}
        />
        <NavLink className="back-btn" to="/">
          Cancel
        </NavLink>
      </form>
      <strong style={{ marginLeft: '3em' }}>Movies & Shows</strong>
      <div className="results-wrapper">
        {searchResultsMovies &&
          searchResultsMovies.map(mv => {
            if (mv.backdrop_path !== null)
              return (
                <ThumbNailComponent
                  mv={mv}
                  key={mv.id}
                  setIsActive={setIsActive}
                />
              );
          })}
        {searchTvResults &&
          searchTvResults.map(mv => {
            if (mv.backdrop_path !== null)
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
export default connect(mapStateToProps, { loadSearchM, loadSearchS })(
  SearchResultsContainer
);
