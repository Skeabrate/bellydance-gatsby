import styled from 'styled-components';

export const StyledSecondSection = styled.div`
    display: grid;
    row-gap: 50px;
    column-gap: 50px;

    ${({ theme }) => theme.mq.bigDesktop} {
        grid-template-columns: 1fr 1fr;
        align-items: flex-end;
        column-gap: 80px;
    }
`;

export const StyledSandArticle = styled.article`
    background-color: ${({ theme }) => theme.colors.sand};
    color: ${({ theme }) => theme.colors.white};
    padding: 20px;
    margin-top: 50px;

    ${({ theme }) => theme.mq.tablet} {
        padding: 30px;
        margin-top: 30px;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        padding: 40px;
        margin-top: 40px;
    }
`;

export const StyledImgs = styled.div`
    display: grid;
    column-gap: 50px;
    row-gap: 20px;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        column-gap: 10px;
    }
`;
