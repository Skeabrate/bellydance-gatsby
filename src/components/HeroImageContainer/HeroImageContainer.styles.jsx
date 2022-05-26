import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';

export const StyledBgImage = styled(BgImage)`
  height: 30vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-position: top;

  button {
    display: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    height: 45vh;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 60vh;

    button {
      display: flex;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    height: calc(100vh - 120px);
    background-attachment: fixed;
  }
`;
