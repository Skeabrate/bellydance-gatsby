import styled from 'styled-components';

export const Wrapper = styled.div`
  font-weight: 700;
  position: relative;
  width: max-content;
  margin: 0 20px;

  span {
    margin: 0 2px 0 8px;
  }

  button {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-weight: bold;
    width: 190px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-color: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.black : theme.colors.white)};
  }

  svg {
    width: 18px;
    height: 18px;
    transform: ${({ $isOpen }) => $isOpen && 'rotate(180deg)'};
  }

  ul {
    cursor: pointer;
    list-style-type: none;
    position: absolute;
    border: 2px solid black;
    border-color: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.black : theme.colors.white)};
    width: 100%;
    border-top: none;
    text-align: center;
    box-shadow: 0px 10px 40px -30px rgba(0, 0, 0, 1);
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.white};

    li {
      padding: 10px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 70%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    border-radius: 100px;
    transition: all 0.2s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  button:focus,
  ul:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
  }
`;
