import React from 'react';
import PropTypes from 'prop-types';
import { StyledHamburger } from './Hamburger.styles';

const Hamburger = ({ toggleNav, isOnTop, changeColor }) => {
  return (
    <StyledHamburger
      onClick={toggleNav}
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
  toggleNav: PropTypes.func.isRequired,
  isOnTop: PropTypes.bool.isRequired,
  changeColor: PropTypes.bool.isRequired,
};

export default Hamburger;
