import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import Pyramid from 'assets/images/SVG/piramidka.svg';

const Wrapper = styled.button`
    display: none;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    font-weight: bold;
    position: relative;
    width: max-content;
    background: transparent;
    border: none;
    margin-top: 8rem;

    svg {
        width: 18px;
        height: 18px;

        path {
            fill: ${({ theme }) => theme.colors.sand};
        }
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 70%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.sand};
        border-radius: 100px;
        transition: all 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }

    ${({ theme }) => theme.mq.desktop} {
        display: flex;
    }

    ${({ theme }) => theme.mq.huge} {
        margin-top: 10rem;
    }
`;

const SkipButton = ({ label, scrollId = '#id' }) => {
    return (
        <Wrapper onClick={() => scrollTo(scrollId)}>
            <Pyramid />
            {label}
        </Wrapper>
    );
};

SkipButton.propTypes = {
    label: PropTypes.string.isRequired,
    scrollId: PropTypes.string.isRequired,
};

export default SkipButton;
