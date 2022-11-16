import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const Date = styled.p`
  font-size: ${({ theme }) => theme.fontSize.caption};
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 700;
  font-style: italic;
`;

export const Chapter = styled.article`
  h2 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    h2 {
      font-size: 2.4rem;
    }
  }
`;
