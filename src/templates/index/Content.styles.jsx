import styled from 'styled-components';

export const StyledFirstSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 6rem;
    row-gap: 3rem;
    margin-bottom: 5rem;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
        row-gap: 5rem;
        margin-bottom: 8rem;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        margin-bottom: 12rem;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const StyledFirstSectionImg = styled.div`
    display: grid;
    column-gap: 6rem;
    row-gap: 2rem;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.mq.huge} {
        column-gap: 8rem;
    }
`;

export const StyledSecondSection = styled.div`
    display: grid;
    row-gap: 5rem;
    column-gap: 6rem;
    align-items: flex-end;

    ${({ theme }) => theme.mq.desktop} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.mq.huge} {
        column-gap: 8rem;
    }
`;

export const StyledSandArticle = styled.article`
    background-color: ${({ theme }) => theme.colors.sand};
    color: ${({ theme }) => theme.colors.white};
    padding: 2rem;
    margin-top: 2rem;

    ${({ theme }) => theme.mq.tablet} {
        padding: 3rem;
        margin-top: 3rem;
    }
`;

export const StyledSecondSectionImg = styled.div`
    display: grid;
    column-gap: 1rem;
    row-gap: 1rem;

    @media (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const StyledThridArticle = styled.article`
    margin-bottom: 6rem;

    ${({ theme }) => theme.mq.tablet} {
        text-align: center;
    }

    ${({ theme }) => theme.mq.desktop} {
        margin-bottom: 12rem;
    }
`;
