import React from 'react';
import './containerStyle.scss';
import RecomThumbNail from './RecomThumbNail';

const RecommendationContainer = props => {
  return (
    <div className="recoms_wrapper" style={{ height: '250px' }}>
      {props.children}
    </div>
  );
};

export default RecommendationContainer;
