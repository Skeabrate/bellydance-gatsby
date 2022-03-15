import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './ContentWrapper.styles';

const ContentWrapper = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ContentWrapper;
