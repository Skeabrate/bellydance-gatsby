import styled from 'styled-components';

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

  ${({ theme }) => theme.mq.mobile} {
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
  padding-bottom: 8rem;
  box-shadow: 0px 0px 30px -15px rgba(0, 0, 0, 1);

  &::after {
    content: '';
    position: absolute;
    background-color: #d1b892;
    width: 160px;
    height: 5px;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
  }
`;

export const Thumbnail = styled.div`
  background-color: ${({ theme }) => theme.colors.sand};
  position: relative;
  max-height: 240px;
  overflow: hidden;

  img {
    max-height: 240px;
  }

  div {
    position: static;
  }

  ${({ theme }) => theme.mq.mobile} {
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

export const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  a {
    color: black;
    text-decoration: none;
    position: relative;
    align-self: center;
    transition: 0.1s ease-in-out;

    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      background-color: black;
      width: calc(100% + 12px);
      height: 1px;
      left: -6px;
      transition: 0.1s ease-in-out;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.sand};

      &::after {
        background-color: ${({ theme }) => theme.colors.sand};
      }
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.paragraph};
    font-weight: 700;
    margin: 0;
  }
`;

export const FadeOutText = styled.div`
  max-height: 90px;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, white 50%, transparent 100%);
  margin: 6px 0 14px;
`;
