import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  row-gap: 10rem;

  ${({ theme }) => theme.mq.tablet} {
    row-gap: 16rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    row-gap: 20rem;
  }
`;

const GridContent = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

GridContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridContent;