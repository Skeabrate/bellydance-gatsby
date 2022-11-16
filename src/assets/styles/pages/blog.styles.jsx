import styled from 'styled-components';

const mobileScreenWidth = '500px';

export const Intro = styled.p`
  text-align: center;
  margin-bottom: 3rem;
`;

export const BlogPostsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 6rem;
  margin-top: 6rem;

  @media (min-width: ${mobileScreenWidth}) {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    column-gap: 2rem;
    row-gap: 8rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    column-gap: 3rem;
  }
`;

export const BlogPost = styled.article`
  position: relative;
  box-shadow: 0px 0px 30px -15px rgba(0, 0, 0, 1);

  h2 {
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    font-weight: 700;
    padding: 2rem;
    padding-bottom: 8rem;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: black;
    height: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    background-color: #d1b892;
    width: 160px;
    height: 5px;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    transition: 0.3s ease-in-out;
  }

  &:hover {
    img {
      scale: 1.05;
    }

    &::after {
      width: 100%;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    h2 {
      font-size: 2.2rem;
    }
  }
`;

export const Thumbnail = styled.div`
  background-color: ${({ theme }) => theme.colors.sand};
  position: relative;
  max-height: 300px;
  overflow: hidden;

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

  img {
    max-height: 300px;
    transition: scale 0.3s ease-in-out !important;
  }

  div {
    position: static;
  }

  &:hover::after {
    opacity: 0.15;
  }

  @media (min-width: ${mobileScreenWidth}) {
    height: 200px;

    img {
      max-height: unset;
      height: 200px;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    height: 260px;

    img {
      height: 260px;
    }
  }
`;
