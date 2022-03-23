import styled from 'styled-components';

export const StyledFirstSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    column-gap: 5rem;
    row-gap: 5rem;
    margin-bottom: 6rem;

    ${({ theme }) => theme.mq.desktop} {
        margin-bottom: 12rem;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        column-gap: 8rem;
    }
`;

export const StyledFirstSectionImg = styled.div`
    display: grid;
    column-gap: 5rem;
    row-gap: 2rem;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        column-gap: 8rem;
    }
`;
