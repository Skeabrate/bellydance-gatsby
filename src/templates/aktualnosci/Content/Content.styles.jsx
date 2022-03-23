import styled from 'styled-components';

export const StyledPostsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 8rem;
    row-gap: 12rem;
    margin-top: 6rem;

    ${({ theme }) => theme.mq.tablet} {
        margin-top: 8rem;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        grid-template-columns: 1fr 1fr;
    }
`;
