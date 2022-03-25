import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    row-gap: 6rem;

    ${({ theme }) => theme.mq.tablet} {
        row-gap: 14rem;
    }

    ${({ theme }) => theme.mq.desktop} {
        row-gap: 20rem;
    }

    ${({ theme }) => theme.mq.huge} {
        row-gap: 24rem;
    }
`;

const GridContent = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

GridContent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GridContent;
