import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    padding-block: 50px;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
    transform: ${({ toggle }) =>
        toggle ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.4s ease-in-out;
    box-shadow: 0px 0px 50px -30px rgba(0, 0, 0, 1);

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 35px;
        row-gap: 35px;
    }

    ${({ theme }) => theme.mq.desktop} {
        display: none;
    }
`;

export const StyledLogo = styled(Link)`
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    h1 {
        font-size: ${({ theme }) => theme.fontSize.headingSmall};
    }
`;

export const StyledNav = styled.ul`
    flex-direction: column;
`;

export const StyledNavItem = styled(Link)`
    color: ${({ theme }) => theme.colors.black};
    text-decoration: none;
`;

export const StyledCloseButton = styled.li`
    button {
        background-color: transparent;
        border: none;

        svg {
            height: 30px;
            width: 30px;
        }
    }
`;

export const StyledSocials = styled.ul`
    display: flex;

    svg {
        height: 40px;
        width: 40px;

        path {
            fill: ${({ theme }) => theme.colors.sand};
        }
    }
`;
