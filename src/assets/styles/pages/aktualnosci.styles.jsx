import styled from 'styled-components';

export const StyledPostsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: ${({ theme }) => theme.spacing.columnGap};
  row-gap: 6rem;
  margin-top: 6rem;

  ${({ theme }) => theme.mq.tablet} {
    row-gap: 10rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AktualnosciContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1500px;

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 4rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 0 6rem;
  }
`;
