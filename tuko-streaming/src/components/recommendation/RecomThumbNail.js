import React from 'react';
import './recomthumbnailStyle.scss';

const RecomThumbNail = ({ mv }) => {
  return (
    <div className="recomthumb">
      <div
        className="wrap"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300${
            mv && mv.backdrop_path
          })`,
        }}
      >
        <div className="recom_details">
          <div className="icons_row flexRow">
            <span>
              <i className="material-icons camo">play_circle</i>
            </span>
            <span>
              <i className="material-icons camo">add_circle_outline</i>
            </span>
            <span>
              <i className="material-icons camo">thumb_up_alt</i>
            </span>
            <span>
              <i className="material-icons camo">thumb_down_alt</i>
            </span>
          </div>

          <div className="sub_details flexRow">
            <span>1h 34mins</span>
            <span>
              <i className="material-icons">hd</i>
            </span>
            <span className="age_rating">13+</span>
            <span>
              {mv.first_air_date && mv.first_air_date.slice(0, 4)}
              {mv.release_date && mv.release_date.slice(0, 4)}
            </span>
          </div>

          <p className="overview_text">{mv && mv.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default RecomThumbNail;
