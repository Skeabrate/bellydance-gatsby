import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: transparent;
  border: none;

  div {
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    span {
      display: block;
      height: 4px;
      width: 30px;
      background-color: ${({ theme, $changeColor, $isOnTop }) => {
        if ($changeColor && $isOnTop) return theme.colors.white;
        else return theme.colors.black;
      }};
      transition: all 0.25s ease-in-out;

      &:nth-child(1) {
        width: 14px;
      }

      &:nth-child(2) {
        width: 22px;
      }
    }
  }

  &:hover div span:nth-child(1) {
    width: 30px;
  }

  &:hover div span:nth-child(2) {
    width: 30px;
  }
`;
