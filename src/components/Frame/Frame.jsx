import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledFrame } from './Frame.styles';

const Frame = ({ children, upRight, downRight, hideMobile, isFlex }) => {
  return (
    <Wrapper $upRight={upRight} $downRight={downRight} $isFlex={isFlex}>
      <StyledFrame
        $upRight={upRight}
        $downRight={downRight}
        $hideMobile={hideMobile}
      ></StyledFrame>
      {children}
    </Wrapper>
  );
};

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  upRight: PropTypes.bool,
  downRight: PropTypes.bool,
  hideMobile: PropTypes.bool,
};

export default Frame;
