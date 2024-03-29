import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-block: 5rem;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transform: ${({ $toggle }) => ($toggle ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.7s cubic-bezier(0.3, 0, 0, 1);

  ${({ theme }) => theme.mq.desktop} {
    position: initial;
    width: fit-content;
    height: 100%;
    background-color: transparent;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-block: 0px;
    transform: translateX(0);
  }
`;

export const Logo = styled(Link)`
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

export const NavLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 3.5rem;
  height: 100%;
  min-height: 300px;
  padding-block: 5rem;

  li:hover a {
    color: ${({ theme }) => theme.colors.sand};
    text-decoration: underline;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    margin-right: 3rem;
    min-height: unset;
    padding-block: 0px;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.mq.desktop} {
    color: ${({ theme, $changeColor, $isOnTop }) => {
      if ($changeColor && $isOnTop) return theme.colors.white;
      else return theme.colors.black;
    }};
    transition: all 0.1s ease-in-out;
  }
`;

export const Socials = styled.div`
  display: flex;
  column-gap: 3.5rem;
  row-gap: 3.5rem;
`;

export const SocialsItem = styled.a`
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
        transition: all 0.1s ease-in-out;
      }

      &:hover {
        path {
          fill: ${({ theme, $changeColor, $isOnTop }) => {
            if ($changeColor && $isOnTop) return theme.colors.sand;
          }};
        }
      }
    }
  }
`;

export const CloseButton = styled.li`
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
