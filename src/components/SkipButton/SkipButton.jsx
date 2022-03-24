import React from 'react';
import styled from 'styled-components';
import Pyramid from 'assets/images/SVG/piramidka.svg';
import PropTypes from 'prop-types';

const Wrapper = styled.button`
    display: none;
    justify-content: center;
    align-items: center;
    column-gap: 12px;
    font-weight: bold;
    position: relative;
    width: max-content;
    background: transparent;
    border: none;

    svg {
        width: 20px;
        height: 20px;
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -10px;
        width: 70%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.black};
        border-radius: 100px;
        transition: all 0.3s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }

    ${({ theme }) => theme.mq.desktop} {
        display: flex;
    }
`;

const SkipButton = ({ label }) => {
    return (
        <Wrapper>
            <Pyramid />
            {label}
        </Wrapper>
    );
};

SkipButton.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SkipButton;
