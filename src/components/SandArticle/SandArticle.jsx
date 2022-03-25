import React from 'react';
import PropTypes from 'prop-types';
import Frame from 'components/Frame/Frame';
import styled from 'styled-components';

const StyledSandArticle = styled.article`
    background-color: ${({ theme }) => theme.colors.sand};
    color: ${({ theme }) => theme.colors.white};
    padding: 2rem;
    margin-top: 2rem;

    ${({ theme }) => theme.mq.tablet} {
        padding: 3rem;
        margin-top: 3rem;
    }
`;

const SandArticle = ({ children }) => {
    return (
        <Frame>
            <StyledSandArticle>{children}</StyledSandArticle>
        </Frame>
    );
};

SandArticle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SandArticle;
