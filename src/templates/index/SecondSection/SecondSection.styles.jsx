import styled from 'styled-components';

export const StyledSecondSection = styled.div`
    display: grid;
    row-gap: 5rem;
    column-gap: 5rem;

    ${({ theme }) => theme.mq.bigDesktop} {
        grid-template-columns: 1fr 1fr;
        align-items: flex-end;
        column-gap: 8rem;
    }
`;

export const StyledSandArticle = styled.article`
    background-color: ${({ theme }) => theme.colors.sand};
    color: ${({ theme }) => theme.colors.white};
    padding: 2rem;
    margin-top: 5rem;

    ${({ theme }) => theme.mq.tablet} {
        padding: 3rem;
        margin-top: 3rem;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 4rem;
        margin-top: 4rem;
    }
`;

export const StyledImgs = styled.div`
    display: grid;
    column-gap: 5rem;
    row-gap: 2rem;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        column-gap: 1rem;
    }
`;
