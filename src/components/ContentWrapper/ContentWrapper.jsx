import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 0 2rem;
    margin: 0 auto;
    max-width: 1500px;

    h2 {
        font-size: ${({ theme }) => theme.fontSize.paragraph};
        margin-bottom: 0.6rem;
    }

    ${({ theme }) => theme.mq.tablet} {
        padding: 0 4rem;
    }

    ${({ theme }) => theme.mq.desktop} {
        padding: 0 6rem;

        h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
    }
`;

const ContentWrapper = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContentWrapper;
