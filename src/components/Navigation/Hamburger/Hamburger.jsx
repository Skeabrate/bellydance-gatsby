import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Hamburger.styles';

const Hamburger = ({ toggleNav, isOnTop, changeColor }) => {
  return (
    <Styled.Wrapper
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
    </Styled.Wrapper>
  );
};

Hamburger.propTypes = {
  toggleNav: PropTypes.func.isRequired,
  isOnTop: PropTypes.bool.isRequired,
  changeColor: PropTypes.bool.isRequired,
};

export default Hamburger;
