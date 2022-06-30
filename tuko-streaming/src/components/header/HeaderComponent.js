import React, { useEffect, useState, useRef, useMemo } from 'react';
import './headerStyle.scss';
import NavbarComponent from '../nav/NavbarComponent';

import { loadHeader } from '../../actions/moviesActions';
import { connect } from 'react-redux';

const HeaderComponent = ({ movies: { headerContent }, loadHeader }) => {
  const [isVisible, setIsVisible] = useState(true);
  const targetRef = useRef(null);

  const stickyNav = entries => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const opt = useMemo(() => {
    return {
      root: null,
      threshold: 0.2,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(stickyNav, opt);
    const targetEl = targetRef.current;
    if (targetEl) observer.observe(targetEl);

    loadHeader();
    //eslint-disable-next-line
    return () => {};
  }, []);

  return (
    <div
      ref={targetRef}
      className="header-container"
      style={
        headerContent && {
          backgroundImage: `url(https://image.tmdb.org/t/p/w1280${headerContent.backdrop_path})`,
        }
      }
    >
      <NavbarComponent isVisible={isVisible} />
      {/* <img
        src="https://image.tmdb.org/t/p/w1280/qw3J9cNeLioOLoR68WX7z79aCdK.jpg"
                src=`https://image.tmdb.org/t/p/w1280/${poster}`
          alt="header-movie"
        className="backdrop-image"
      /> */}

      <div className="details">
        <h1 className="content-title">{headerContent && headerContent.name}</h1>
        <p className="content-rating">
          IMDB RATING: {headerContent && headerContent.vote_average}
        </p>
        <p className="content-overview">
          {headerContent && headerContent.overview}
        </p>
        <span className="content-buttons-container">
          <span className="add-btn btn">+ My List</span>
          <span className="play-btn btn">Play</span>
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  movies: state.movies,
});
export default connect(mapStateToProps, { loadHeader })(HeaderComponent);
//https://image.tmdb.org/t/p/original/qw3J9cNeLioOLoR68WX7z79aCdK.jpg(BACKDROP)
//https://image.tmdb.org/t/p/w185/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg(POSTER)
