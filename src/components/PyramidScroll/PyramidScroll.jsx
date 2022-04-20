import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import ArrowHome from 'assets/images/SVG/arrowHome.svg';

const StyledPyramid = styled.button`
  width: 140px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-bottom: 10px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  border: none;

  ${({ theme }) => theme.mq.tablet} {
    width: 180px;
    height: 90px;
    padding-bottom: 20px;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;

const PyramidScroll = () => {
  const scrollHandler = () => scrollTo('#heading');

  return (
    <StyledPyramid aria-label="idź do głównej sekcji" onClick={scrollHandler}>
      <ArrowHome />
    </StyledPyramid>
  );
};

export default PyramidScroll;
