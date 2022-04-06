import styled from 'styled-components';

export const StyledPostsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: ${({ theme }) => theme.spacing.columnGap};
    row-gap: 4rem;
    margin-top: 6rem;

    ${({ theme }) => theme.mq.tablet} {
        row-gap: 8rem;
    }

    ${({ theme }) => theme.mq.desktop} {
        grid-template-columns: 1fr 1fr;
    }
`;
