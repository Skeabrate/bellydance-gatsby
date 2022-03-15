import styled from 'styled-components';

export const StyledFirstSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 50px;
    row-gap: 50px;
    margin-bottom: 60px;

    ${({ theme }) => theme.mq.desktop} {
        margin-bottom: 120px;
    }
`;

export const StyledFirstSectionImg = styled.div`
    display: grid;
    column-gap: 50px;
    row-gap: 20px;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
    }
`;
