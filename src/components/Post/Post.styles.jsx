import styled from 'styled-components';

export const Wrapper = styled.article`
  height: 100%;
  box-shadow: 0px 0px 30px -15px rgba(0, 0, 0, 1);

  ul {
    padding-left: 20px;
  }
`;

export const MediaContainer = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.sand};
  position: relative;
  max-height: 300px;
  overflow: hidden;

  img {
    max-height: 300px;
  }

  div {
    position: static;
  }

  ${({ theme }) => theme.mq.mobile} {
    max-height: unset;
    height: 450px;

    img {
      max-height: unset;
      height: 450px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 350px;

    img {
      height: 350px;
    }
  }
`;

export const Media = styled.div`
  video,
  img {
    transition: scale 0.3s ease-in-out !important;
  }

  video {
    z-index: 1 !important;
  }

  &:hover img,
  video {
    scale: 1.05;
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
    z-index: 1;
  }

  &:hover::after {
    opacity: 0.15;
  }
`;

export const Legend = styled.div`
  position: absolute !important;
  z-index: 0;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  column-gap: 6px;
  max-width: 300px;
  overflow-x: hidden;

  button {
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.sand};
    border-radius: 100px;
    border: none;
    transition: background-color 0.1s ease-in-out;

    &:hover {
      background-color: #dccdb4;
    }
  }
`;

export const PostContent = styled.div`
  padding: 4rem 2rem 2rem 2rem;
  margin-bottom: 7rem;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.mq.tablet} {
    padding: 4rem;
  }
`;
