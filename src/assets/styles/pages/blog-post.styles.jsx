import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

const buttonStyles = css`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  width: fit-content;
  padding-block: 3px;
  background: transparent;
  border: none;
  font-style: italic;
  font-size: 1.4rem;
  color: black;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.sand};
    transition: 0.2s ease-in-out;
  }

  svg {
    height: 14px;
    width: 14px;
    transition: 0.2s ease-in-out;

    path {
      fill: ${({ theme }) => theme.colors.sand};
    }
  }
`;

export const GoBack = styled(Link)`
  ${buttonStyles};

  &::after {
    left: -4px;
    width: 80%;
  }

  &:hover {
    &::after {
      width: calc(100% + 4px);
    }

    svg {
      transform: translateX(-4px);
    }
  }
`;

export const GoToTop = styled.button`
  ${buttonStyles};
  flex-direction: column;
  margin: 0 auto;

  &::after {
    left: 0;
    width: 100%;
    transform-origin: center;
    transform: scaleX(0.7);
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }

    svg {
      transform: translateY(-4px);
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Date = styled.p`
  width: fit-content;
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.caption};
  font-weight: 700;
  padding-inline: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.sand};
  margin-bottom: 1rem;
  font-style: italic;

  svg {
    padding-bottom: 1px;
    width: 16px;
    height: 16px;

    path {
      fill: ${({ theme }) => theme.colors.sand};
    }
  }
`;

export const Chapter = styled.article`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;

  h2 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 0.6rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ul {
    margin: 1rem 0 1rem 2rem;
  }

  &:last-child {
    margin-bottom: 8rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 6rem;
    grid-gap: 3rem;

    h2 {
      font-size: 2.4rem;
    }

    &:last-child {
      margin-bottom: 12rem;
    }
  }
`;

export const Media = styled.div`
  z-index: 1;

  img,
  video {
    width: 100% !important;
    object-fit: contain;
  }

  div {
    position: static;
    z-index: 0;
  }
`;
