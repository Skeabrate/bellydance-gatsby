import React from 'react';
import PropTypes from 'prop-types';
import { StyledHamburger } from './Hamburger.styles';

const Hamburger = ({ handleOpenMenu, isOnTop, changeColor }) => {
  return (
    <StyledHamburger
      onClick={handleOpenMenu}
      aria-label='otwórz nawigację'
      $isOnTop={isOnTop}
      $changeColor={changeColor}
    >
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledHamburger>
  );
};

Hamburger.propTypes = {
  handleOpenMenu: PropTypes.func.isRequired,
  isOnTop: PropTypes.bool.isRequired,
  changeColor: PropTypes.bool.isRequired,
};

export default Hamburger;
