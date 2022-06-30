import React, { useEffect, useMemo, useState } from 'react';
import './modalStyle.scss';

import Youtube from 'react-youtube';
import RecomThumbNail from '../recommendation/RecomThumbNail';

import movieTrailer from 'movie-trailer';

import { connect } from 'react-redux';

import {
  addToListM,
  removeFromList,
  loadRecommendationsM,
} from '../../actions/seriesActions';

const ModalWindow = ({
  setIsActive,
  addToListM,
  removeFromList,
  loadRecommendationsM,
  series: { current, trailerURL, list, recommendations },
}) => {
  const [isAddedToList, setIsAddedToList] = useState(null);
  const [video_id, setVideo_id] = useState('');
  const [trailerAvailable, setTrailerAvailable] = useState(null);
  const added = useMemo(() => {
    return isAddedToList;
  }, []);

  useEffect(() => {
    setIsAddedToList(list.some(item => item.id === current.id));
    loadRecommendationsM(current);
    const title = current.name ? current.name : current.title;

    movieTrailer(null, { tmdbId: current.id })
      .then(res => {
        console.log(res);
        setTrailerAvailable(res);
        setVideo_id(res.split('?v=')[1]);
      })
      .catch(Error => console.error(Error));
    //eslint-disable-next-line
    () => {
      setTrailerAvailable(null);
    };
  }, []);

  const onSetActive = () => {
    if (list.length > 0) {
      localStorage.setItem('Lists', JSON.stringify(list));
    }
    setIsActive(false);
  };

  const onAdd = () => {
    setIsAddedToList(true);
    addToListM(current);
  };
  const onRemove = () => {
    setIsAddedToList(false);
    removeFromList(current.id);
  };
  return (
    <div className="modalBackdrop">
      <div className="modalContainer" style={{ color: ' black' }}>
        <button className="exit_btn" onClick={onSetActive}>
          <i className="material-icons">close</i>
        </button>
        <div className="video-trailer">
          {trailerAvailable !== null ? (
            <Youtube
              videoId={video_id && video_id}
              opts={{
                height: '390',
                width: '100%',
                playerVars: {
                  // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                },
              }}
            />
          ) : (
            <h3 style={{ color: 'lightgray', textJustify: 'auto' }}>
              Sorry, Content Not Available At The Moment...
              <br />
              <i className="material-icons">sentiment_very_dissatisfied</i>
            </h3>
          )}
        </div>

        <h1 className="content_title inner">
          {current.name && current.name}
          {current.title && current.title}
        </h1>
        <div className="tiny_details inner">
          <span className="details_content-year">
            {current.first_air_date && current.first_air_date.slice(0, 4)}
            {current.release_date && current.release_date.slice(0, 4)}
          </span>
          <span className="details_content-ageRating">13+</span>
          <span className="details_content-mediaType">TV</span>
          <span className="details_content-vote">
            {current && current.average_vote}
          </span>
          <i className="material-icons">hd</i>
          <i className="material-icons">surround_sound</i>
        </div>

        <p className="content_overView inner">{current && current.overview}</p>

        <div className="btn_controls inner">
          {!isAddedToList ? (
            <span style={{ textAlign: 'center' }}>
              <i
                className="material-icons ctrl"
                style={{ cursor: 'pointer' }}
                onClick={onAdd}
              >
                add
              </i>
              <p>My List</p>
            </span>
          ) : (
            <span style={{ textAlign: 'center' }}>
              <i
                style={{ cursor: 'pointer', color: 'orangered' }}
                className="material-icons ctrl"
                onClick={onRemove}
              >
                done
              </i>
              <p>My List</p>
            </span>
          )}
          <span style={{ textAlign: 'center' }}>
            <i className="material-icons ctrl">thumb_up</i>
            <p>Rate</p>
          </span>
          <span style={{ textAlign: 'center' }}>
            <i className="material-icons ctrl">file_download</i>
            <p>Download</p>
          </span>
        </div>
        <strong style={{ marginLeft: '10px' }}>Recommendations</strong>
        <div className="recoms_container">
          {recommendations &&
            recommendations.map(mv => <RecomThumbNail mv={mv} key={mv.id} />)}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  series: state.series,
});
export default connect(mapStateToProps, {
  addToListM,
  removeFromList,
  loadRecommendationsM,
})(ModalWindow);
/* 
<div className="modal-backdrop">
<div className="modal-window"></div>
</div> */

{
  /* 






 */
}
