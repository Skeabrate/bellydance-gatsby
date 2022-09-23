import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  height: calc(100vh - 120px - 260px);
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;
  margin-top: 120px;

  h1 {
    font-size: 14rem;
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
    color: ${({ theme }) => theme.colors.sand};
    line-height: 1;
  }

  p {
    font-size: 2.2rem;
    font-style: italic;
  }

  ${({ theme }) => theme.mq.tablet} {
    height: calc(100vh - 120px - 400px);
    justify-content: flex-end;
  }
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <p>Strona nie została odnaleziona</p>
    </Wrapper>
  );
};

export default NotFoundPage;
