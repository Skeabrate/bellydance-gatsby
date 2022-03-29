import styled from 'styled-components';

export const StyledFirstSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: ${({ theme }) => theme.spacing.columnMobile};
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
    column-gap: ${({ theme }) => theme.spacing.columnMobile};
    row-gap: 2rem;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.mq.huge} {
        column-gap: ${({ theme }) => theme.spacing.columnHuge};
    }
`;

export const StyledSecondSection = styled.div`
    display: grid;
    row-gap: 5rem;
    column-gap: ${({ theme }) => theme.spacing.columnMobile};
    align-items: flex-end;

    ${({ theme }) => theme.mq.desktop} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.mq.huge} {
        column-gap: ${({ theme }) => theme.spacing.columnHuge};
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
