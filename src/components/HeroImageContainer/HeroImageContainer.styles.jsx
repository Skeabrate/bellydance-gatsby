import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';

export const StyledBgImage = styled(BgImage)`
  height: 240px;
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
    height: 600px;

    button {
      display: flex;
    }
  }
`;
