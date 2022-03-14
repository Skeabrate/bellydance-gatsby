import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
    position: fixed;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ isOnTop }) =>
        isOnTop ? 'none' : '0px 0px 50px -33px rgba(0, 0, 0, 1)'};
    height: ${({ isOnTop }) => (isOnTop ? '120px' : '80px')};
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    transform: ${({ hideNav }) =>
        hideNav ? 'translateY(-100%)' : 'translateX(0)'};
    transition: all 0.3s ease-in-out;

    ${({ theme }) => theme.mq.desktop} {
        padding: 0 50px;
    }
`;

export const StyledLogo = styled(Link)`
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`;

export const StyledNav = styled.nav`
    display: none;

    ${({ theme }) => theme.mq.desktop} {
        display: initial;
    }

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 30px;
    }

    svg {
        height: 26px;
        width: 26px;

        path {
            fill: ${({ theme }) => theme.colors.sand};
        }
    }
`;

export const StyledNavItem = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
`;

export const StyledHamburger = styled.button`
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
            background-color: ${({ theme }) => theme.colors.black};
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
