import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: sticky;
  background-color: white;
  zindex: 1;
`;

const ParalaxWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

ParalaxWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ParalaxWrapper;
