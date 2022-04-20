import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useAnimation } from 'hooks/useAnimation';

import { Wrapper, StyledFrame } from './Frame.styles';

const Frame = ({ children, upRight, downRight, hideMobile, isFlex }) => {
  const frameRef = useRef(null);
  const { startAnimation } = useAnimation(frameRef);

  return (
    <Wrapper
      ref={frameRef}
      $upRight={upRight}
      $downRight={downRight}
      $isFlex={isFlex}
    >
      <StyledFrame
        $upRight={upRight}
        $downRight={downRight}
        $hideMobile={hideMobile}
        $startAnimation={startAnimation}
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
