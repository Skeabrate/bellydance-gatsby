import styled, { keyframes } from 'styled-components';

const appear = keyframes`
	from {
		opacity: 0;
	} to {
		opacity: 1;
	}
`;

export const SliderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 999999;
  animation: ${appear} 0.5s forwards;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.9;
    z-index: 0;
  }

  button {
    position: absolute;
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      fill: ${({ theme }) => theme.colors.arrows};
      transition: all 0.1s ease-in-out;
    }

    &:hover {
      svg {
        fill: white;
        transform: scale(1.1);
      }
    }
  }

  img {
    max-width: 90%;
    max-height: 90%;
  }

  * {
    padding: 0 !important;
    position: relative;
    z-index: 1;
  }
`;

export const SwitchButtonLeft = styled.button`
  height: 100%;
  width: 60px;
  z-index: 10;
`;

export const SwitchButtonRight = styled.button`
  height: 100%;
  width: 60px;
  z-index: 10;
  right: 0;
`;

export const CloseButton = styled.button`
  top: 0px;
  right: 0px;
  width: 80px;
  height: 80px;
  z-index: 11;

  svg {
    width: 28px;
    height: 28px;
  }
`;

export const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledCounter = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: ${({ theme }) => theme.colors.white};
`;
