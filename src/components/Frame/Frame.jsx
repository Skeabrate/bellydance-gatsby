import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Frame.styles';
import { useAnimation } from 'hooks/useAnimation';

const Frame = ({ children, upRight, downRight, hideMobile, isFlex }) => {
  const frameRef = useRef(null);
  const { startAnimation } = useAnimation(frameRef);

  return (
    <Styled.Wrapper
      ref={frameRef}
      $upRight={upRight}
      $downRight={downRight}
      $isFlex={isFlex}
    >
      <Styled.Frame
        $upRight={upRight}
        $downRight={downRight}
        $hideMobile={hideMobile}
        $startAnimation={startAnimation}
      ></Styled.Frame>
      {children}
    </Styled.Wrapper>
  );
};

Frame.propTypes = {
  children: PropTypes.node.isRequired,
  upRight: PropTypes.bool,
  downRight: PropTypes.bool,
  hideMobile: PropTypes.bool,
};

export default Frame;
