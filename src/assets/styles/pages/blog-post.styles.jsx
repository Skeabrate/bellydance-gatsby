import styled from 'styled-components';

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
  border-bottom: 1px solid black;
  margin-bottom: 1rem;

  svg {
    padding-bottom: 1px;
    width: 16px;
    height: 16px;
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
    margin-bottom: 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 6rem;
    grid-gap: 3rem;

    h2 {
      font-size: 2.4rem;
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
