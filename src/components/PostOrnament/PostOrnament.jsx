import React from 'react';
import styled from 'styled-components';
import { useAnimation } from 'hooks/useAnimation';

const StyledPostOrnament = styled.div`
  position: absolute;
  background-color: #d1b892;
  width: 160px;
  height: 5px;
  bottom: -10px;
  right: 50%;
  transform-origin: center;
  transform: ${({ $isElementVisible }) =>
    $isElementVisible ? 'translateX(50%) scaleX(1)' : 'translateX(50%) scaleX(0)'};
  transition: transform 0.5s cubic-bezier(0, 0, 0.25, 1);
`;
const PostOrnament = React.forwardRef((props, ref) => {
  const { isElementVisible } = useAnimation({ ref, rootMargin: '-30px' });

  return <StyledPostOrnament $isElementVisible={isElementVisible} />;
});

export default PostOrnament;
