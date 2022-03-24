import styled from 'styled-components';

export const StyledContent = styled.div`
    section {
        display: grid;
        align-items: flex-end;
        margin-bottom: 12rem;
        column-gap: 5rem;
        row-gap: 2rem;

        ${({ theme }) => theme.mq.desktop} {
            grid-template-columns: 1fr 1fr;

            &:nth-child(2) {
                article {
                    grid-column: 2;
                    grid-row: 1;
                }
            }
        }
    }
`;
