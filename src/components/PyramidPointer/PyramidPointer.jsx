import React from 'react';
import styled from 'styled-components';

import Pyramid from 'assets/images/SVG/piramidka.svg';

const StyledPyramid = styled.div`
  transform: rotate(-90deg);

  svg {
    width: 18px;
    height: 18px;
    path {
      fill: ${({ theme }) => theme.colors.sand};
    }
  }
`;

const PyramidPointer = () => {
  return (
    <StyledPyramid>
      <Pyramid />
    </StyledPyramid>
  );
};

export default PyramidPointer;
