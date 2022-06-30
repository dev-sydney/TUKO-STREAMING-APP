import React from 'react';
import './thumbnailStyle.scss';
import { loadCurrent } from '../../actions/seriesActions';
import { connect } from 'react-redux';

const ThumbNailComponent = ({ mv, loadCurrent, setIsActive }) => {
  const onSetCurrent = () => {
    loadCurrent(mv);
    // loadTrailerURL(mv.name);
  };

  const onSetActive = () => {
    setIsActive(true);
  };

  return (
    <div className="thumbnail" onClick={onSetCurrent}>
      <img
        src={`https://image.tmdb.org/t/p/w185/${mv.poster_path}`}
        alt={mv.name}
        onClick={onSetActive}
      />
    </div>
  );
};

export default connect(null, { loadCurrent })(React.memo(ThumbNailComponent));
//name
//overview
//first_air_date
//backdrop_path
//vote_average
