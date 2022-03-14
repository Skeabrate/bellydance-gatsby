import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.footer`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    row-gap: 15px;

    p {
        font-size: ${({ theme }) => theme.fontSize.caption};
    }
`;

export const StyledLogo = styled(Link)`
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};

    h1 {
        font-size: ${({ theme }) => theme.fontSize.headingMobile};
        font-weight: 400;
    }

    ${({ theme }) => theme.mq.desktop} {
        h1 {
            font-size: ${({ theme }) => theme.fontSize.heading};
        }
    }
`;

export const StyledSocials = styled.ul`
    list-style: none;
    display: flex;
    column-gap: 25px;

    svg {
        height: 26px;
        width: 26px;
    }
`;
