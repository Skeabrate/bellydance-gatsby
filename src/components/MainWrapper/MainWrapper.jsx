import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMainWrapper = styled.main`
    margin-top: 120px;
`;

const MainWrapper = ({ children }) => {
    return <StyledMainWrapper>{children}</StyledMainWrapper>;
};

MainWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainWrapper;
