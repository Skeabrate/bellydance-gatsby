import styled from 'styled-components';
import { Link } from 'gatsby';

export const Wrapper = styled.footer`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 5rem;
  row-gap: 1.5rem;
  height: 260px;

  p {
    font-size: ${({ theme }) => theme.fontSize.caption};
  }

  ${({ theme }) => theme.mq.tablet} {
    height: 400px;
  }
`;

export const StyledLogo = styled(Link)`
  padding-bottom: 0.8rem;
`;

export const Socials = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 2.5rem;

  svg {
    height: 26px;
    width: 26px;

    path {
      transition: all 0.1s ease-in-out;

      &:hover {
        fill: ${({ theme }) => theme.colors.sand};
      }
    }
  }
`;
