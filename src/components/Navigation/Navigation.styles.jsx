import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  background-color: ${({ theme, $isOnTop, $changeColor }) => {
    if ($changeColor && $isOnTop) return 'transparent';
    else return theme.colors.white;
  }};
  height: ${({ $isOnTop }) => ($isOnTop ? '120px' : '80px')};
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 100;

  transform: ${({ $toggle, $hideNav, $imgIndex }) => {
    if (!$toggle && $hideNav) return 'translateY(-100%)';
    else if (!$toggle && !$hideNav) return 'translateY(0)';
  }};
  transition: all 0.3s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    padding: 0 5rem;
  }
`;
