import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-block: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: ${({ $toggle }) =>
    $toggle ? 'translateX(0)' : 'translateX(-100%)'};
  box-shadow: 0px 0px 50px -33px rgba(0, 0, 0, 1);

  transition: transform 0.7s cubic-bezier(0.3, 0, 0, 1);

  ${({ theme }) => theme.mq.desktop} {
    position: initial;
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-block: 0;
    transform: translateX(0);
  }
`;

export const StyledLogo = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily.greatVibes};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  h1 {
    font-size: 4.2rem;
    font-weight: 400;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const StyledNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  column-gap: 35px;
  row-gap: 35px;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    margin-right: 30px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.mq.desktop} {
    color: ${({ theme, $changeColor, $isOnTop }) => {
      if ($changeColor && $isOnTop) return theme.colors.white;
      else return theme.colors.black;
    }};
    transition: all 0.2s ease-in-out;
  }
`;

export const StyledSocials = styled.div`
  display: flex;
  column-gap: 35px;
  row-gap: 35px;
`;

export const StyledSocialsItem = styled.a`
  svg {
    height: 40px;
    width: 40px;

    path {
      fill: ${({ theme }) => theme.colors.sand};
    }

    ${({ theme }) => theme.mq.desktop} {
      height: 26px;
      width: 26px;

      path {
        fill: ${({ theme, $changeColor, $isOnTop }) => {
          if ($changeColor && $isOnTop) return theme.colors.white;
          else return theme.colors.sand;
        }};
      }
    }
  }
`;

export const StyledCloseButton = styled.li`
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }

  button {
    background-color: transparent;
    border: none;
    width: 50px;
    height: 50px;

    svg {
      height: 30px;
      width: 30px;
    }
  }
`;
