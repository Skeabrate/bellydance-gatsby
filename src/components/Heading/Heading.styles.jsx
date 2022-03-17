import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: ${({ isMain }) => (isMain ? '80px 0 60px' : '140px 0 60px')};
    text-align: center;

    ${({ theme }) => theme.mq.tablet} {
        margin: ${({ isMain }) => (isMain ? '120px 0 80px' : '180px 0 80px')};
    }

    ${({ theme }) => theme.mq.desktop} {
        margin: 200px 0 120px;
        margin: ${({ isMain }) => (isMain ? '140px 0 80px' : '200px 0 80px')};
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        margin: 220px 0 120px;
        margin: ${({ isMain }) => (isMain ? '160px 0 80px' : '240px 0 80px')};
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
