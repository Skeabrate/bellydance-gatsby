import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: ${({ $isMain }) => ($isMain ? '6rem 0 6rem' : '12rem 0 6rem')};

    ${({ theme }) => theme.mq.tablet} {
        padding: ${({ $isMain }) =>
            $isMain ? '10rem 0 8rem' : '18rem 0 8rem'};
    }

    ${({ theme }) => theme.mq.desktop} {
        padding: ${({ $isMain }) =>
            $isMain ? '13rem 0 8rem' : '20rem 0 8rem'};
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        padding: ${({ $isMain }) =>
            $isMain ? '16rem 0 8rem' : '24rem 0 8rem'};
    }
`;

export const StyledTitle = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
    font-size: ${({ theme }) => theme.fontSize.headingMobile};
    font-weight: 400;

    ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.fontSize.heading};
    }
`;
