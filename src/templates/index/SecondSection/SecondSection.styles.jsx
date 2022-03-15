import styled from 'styled-components';

export const StyledSecondSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 50px;

    ${({ theme }) => theme.mq.bigDesktop} {
        grid-template-columns: 1fr 1fr;
        column-gap: 50px;
        align-items: flex-end;
    }
`;

export const StyledSandArticle = styled.article`
    background-color: ${({ theme }) => theme.colors.sand};
    color: ${({ theme }) => theme.colors.white};
    padding: 30px;
    margin-top: 30px;

    @media (min-width: 1300px) {
        padding: 40px;
        margin-top: 40px;
    }
`;

export const StyledImgs = styled.div`
    display: grid;
    column-gap: 10px;
    row-gap: 10px;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
    }
`;
