import React from 'react';
import ArrowHome from 'assets/images/SVG/arrowHome.svg';
import { StyledPyramid } from './PyramidScroll.styles';
import scrollTo from 'gatsby-plugin-smoothscroll';

const PyramidScroll = () => {
    return (
        <StyledPyramid onClick={() => scrollTo('#heading')}>
            <ArrowHome />
        </StyledPyramid>
    );
};

export default PyramidScroll;
