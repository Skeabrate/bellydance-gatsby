import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.div`
    position: fixed;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 50px -30px rgba(0, 0, 0, 1);
    height: 100px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
`;

export const StyledLogo = styled.header`
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
`;

export const StyledNav = styled.ul`
    display: none;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    ${({ theme }) => theme.mq.tablet}) {
        display: initial;
    }
`;

export const StyledNavItem = styled(Link)``;
