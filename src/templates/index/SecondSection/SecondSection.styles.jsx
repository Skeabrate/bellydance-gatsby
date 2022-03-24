import styled from 'styled-components';

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

export const StyledImgs = styled.div`
    display: grid;
    column-gap: 1rem;
    row-gap: 1rem;

    @media (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
    }
`;
