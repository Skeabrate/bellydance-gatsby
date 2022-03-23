import styled from 'styled-components';

export const StyledThridArticle = styled.article`
    margin-bottom: 6rem;

    ${({ theme }) => theme.mq.tablet} {
        text-align: center;
    }

    ${({ theme }) => theme.mq.desktop} {
        margin-bottom: 12rem;
    }
`;
