import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ $isMain }) => ($isMain ? '6rem 0 4rem' : '10rem 0 4rem')};

  ${({ theme }) => theme.mq.tablet} {
    padding: ${({ $isMain }) => ($isMain ? '10rem 0 6rem' : '16rem 0 6rem')};
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: ${({ $isMain }) => ($isMain ? '14rem 0 8rem' : '20rem 0 8rem')};
  }
`;

export const StyledTitle = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.greatVibes};
  font-size: ${({ theme }) => theme.fontSize.headingMobile};
  font-weight: 400;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.heading};
  }
`;
