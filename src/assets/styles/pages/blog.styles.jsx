import styled from 'styled-components';

export const BlogPostsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1rem;
  row-gap: 6rem;
  margin-top: 6rem;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  ${({ theme }) => theme.mq.tablet} {
    row-gap: 10rem;
    column-gap: ${({ theme }) => theme.spacing.columnGap};
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr;
  }
`;
