import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.footer`
  margin: 15rem 2rem 5rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  row-gap: 15px;

  p {
    font-size: ${({ theme }) => theme.fontSize.caption};
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 25rem 2rem 5rem;
  }
`;

export const StyledLogo = styled(Link)`
  text-decoration: none;

  h1 {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
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
  column-gap: 2.5rem;

  svg {
    height: 26px;
    width: 26px;
  }
`;
