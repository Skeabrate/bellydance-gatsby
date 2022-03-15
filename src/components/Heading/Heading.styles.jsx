import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledTitle = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.greatVibes};
    font-size: ${({ theme }) => theme.fontSize.headingMobile};
    font-weight: 400;

    ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.fontSize.heading};
    }
`;
