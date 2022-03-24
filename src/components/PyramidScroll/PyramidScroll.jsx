import React from 'react';
import ArrowHome from 'assets/images/SVG/arrowHome.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';
import styled from 'styled-components';

const StyledPyramid = styled.button`
    width: 180px;
    height: 90px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 20px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border: none;

    svg {
        height: 24px;
        width: 24px;
    }
`;

const PyramidScroll = () => {
    return (
        <StyledPyramid onClick={() => scrollTo('#heading')}>
            <ArrowHome />
        </StyledPyramid>
    );
};

export default PyramidScroll;
