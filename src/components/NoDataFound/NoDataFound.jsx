import React from 'react';
import styled from 'styled-components';

const StyledDataNotFound = styled.h2`
  text-align: center;
  margin-top: 6rem;
`;

const NoDataFound = ({ label }) => {
  return <StyledDataNotFound>{label}</StyledDataNotFound>;
};

export default NoDataFound;
