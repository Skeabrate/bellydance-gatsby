import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
    position: fixed;
    background-color: ${({ theme, isOnTop }) =>
        isOnTop ? 'transparent' : theme.colors.white};
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
    z-index: 9999;

    transform: ${({ toggle, hideNav }) => {
        if (!toggle && hideNav) return 'translateY(-100%)';
        else if (!toggle && !hideNav) return 'translateX(0)';
    }};
    transition: all 0.3s ease-in-out;

    ${({ theme }) => theme.mq.desktop} {
        padding: 0 50px;
    }
`;

export const StyledLogo = styled(Link)`
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
    text-decoration: none;
    color: ${({ theme, changeColor, isOnTop }) => {
        if (changeColor && isOnTop) return theme.colors.white;
        else return theme.colors.black;
    }};
    transition: all 0.2s ease-in-out;

    h1 {
        font-size: ${({ theme }) => theme.fontSize.headingMobile};
        font-weight: 400;
    }

    ${({ theme }) => theme.mq.tablet} {
        h1 {
            font-size: ${({ theme }) => theme.fontSize.heading};
        }
    }
`;
