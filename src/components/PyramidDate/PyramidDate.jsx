import React from 'react';
import styled from 'styled-components';

export const StyledPyramidDate = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.caption};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.sand};
  width: 130px;
  height: 60px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;

const PyramidDate = ({ date }) => {
  return <StyledPyramidDate>{date}</StyledPyramidDate>;
};

export default PyramidDate;
