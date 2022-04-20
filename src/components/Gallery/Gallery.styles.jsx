import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;

  @media (min-width: 350px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const StyledItem = styled.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;

  img {
    transition: all 0.3s ease-in-out !important;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    ::after {
      opacity: 0.1;
    }

    img {
      transform: scale(1.05);
    }
  }

  @media (min-width: 652px) {
    height: 300px;

    div {
      position: static;
    }

    img {
      height: 100%;
    }
  }
`;
