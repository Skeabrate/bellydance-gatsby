import styled from 'styled-components';

export const StyledFirstSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: ${({ theme }) => theme.spacing.columnGap};
    row-gap: 3rem;
    margin-bottom: 3rem;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
        row-gap: 5rem;
        margin-bottom: 8rem;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const StyledFirstSectionImg = styled.div`
    display: grid;
    column-gap: ${({ theme }) => theme.spacing.columnGap};
    row-gap: 2rem;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
    }
`;

export const StyledSecondSectionImg = styled.div`
    display: grid;
    column-gap: 1rem;
    row-gap: 2rem;

    @media (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const StyledThridArticle = styled.article`
    margin-bottom: 3rem;

    ${({ theme }) => theme.mq.tablet} {
        text-align: center;
        margin-bottom: 8rem;
    }

    ${({ theme }) => theme.mq.desktop} {
        margin-bottom: 12rem;
    }
`;
