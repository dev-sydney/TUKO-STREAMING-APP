import React from 'react';
import './searchStyle.scss';
import { loadCurrent } from '../../../actions/seriesActions';
import { connect } from 'react-redux';
const SearchThumbNail = ({ mv, setIsActive, loadCurrent }) => {
  const onSetActive = () => {
    setIsActive(true);
  };

  const onSetCurrent = () => {
    loadCurrent(mv);
    //loadTrailerURL(mv.name);
  };

  return (
    <div className="searchThumbNail" onClick={onSetActive}>
      <img
        src={`https://image.tmdb.org/t/p/w185/${mv.poster_path}`}
        alt={mv.name}
        onClick={onSetCurrent}
      />
    </div>
  );
};

export default connect(null, { loadCurrent })(React.memo(SearchThumbNail));
