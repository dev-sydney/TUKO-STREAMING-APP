import React from 'react';
import './navStyle.scss';

import { NavLink } from 'react-router-dom';

const NavbarComponent = ({ isVisible }) => {
  return (
    <div className={`nav-container ${!isVisible ? 'sticky' : ''}`}>
      <NavLink className="logo links" to="/">
        <img
          src={require('./images/tuko_logo.png').default}
          alt="logo"
          height={25}
        />
      </NavLink>
      <span className="search_more_wrapper ">
        <NavLink to="/search" className="links">
          <i className="material-icons">search</i>
        </NavLink>
        <span className="more links">. . .</span>
      </span>
    </div>
  );
};
export default NavbarComponent;
