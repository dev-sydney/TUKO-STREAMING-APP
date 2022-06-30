import React, { Fragment, useState } from 'react';

import HeaderComponent from './header/HeaderComponent';
import CarosuelContainer from './carosuel/CarosuelContainer';
import ModalWindow from '../components/modal/ModalWindow';

const HomeComponent = () => {
  const [isActive, setIsActive] = useState(false);

  const custom_style = {
    width: '98.5vw',
  };
  return (
    <Fragment>
      {isActive && <ModalWindow setIsActive={setIsActive} />}
      <HeaderComponent />
      <CarosuelContainer style={custom_style} setIsActive={setIsActive} />
    </Fragment>
  );
};
export default HomeComponent;
