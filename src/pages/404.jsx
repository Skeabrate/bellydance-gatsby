import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
  height: calc(100vh - 120px - 30vh);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 3rem;
  align-items: center;
  margin-top: 120px;
  box-shadow: inset 0px 100px 100px -80px ${({ theme }) => theme.colors.sand};

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
    height: calc(100vh - 120px - 40vh);
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
