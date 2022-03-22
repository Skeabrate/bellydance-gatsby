import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

const colorChangeHelper = css`
    text-decoration: none;
    color: ${({ theme, changeColor, isOnTop }) => {
        if (changeColor && isOnTop) return theme.colors.white;
        else return theme.colors.black;
    }};
    transition: all 0.2s ease-in-out;
`;

export const Wrapper = styled.nav`
    position: fixed;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.mq.desktop} {
        position: initial;
        background-color: transparent;
        flex-direction: row;
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
    justify-content: center;
    align-items: center;
    column-gap: 30px;
`;

export const StyledLink = styled(Link)`
    ${colorChangeHelper}
`;

export const StyledSocials = styled.div`
    a {
        margin-left: 30px;

        svg {
            height: 26px;
            width: 26px;

            path {
                fill: ${({ theme, changeColor, isOnTop }) => {
                    if (changeColor && isOnTop) return theme.colors.white;
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
