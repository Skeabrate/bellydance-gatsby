import styled from 'styled-components';

export const StyledContent = styled.div`
    display: grid;
    row-gap: 6rem;

    ${({ theme }) => theme.mq.tablet} {
        row-gap: 14rem;
    }

    ${({ theme }) => theme.mq.desktop} {
        row-gap: 20rem;
    }

    ${({ theme }) => theme.mq.huge} {
        row-gap: 24rem;
    }

    section {
        display: grid;
        align-items: flex-end;
        column-gap: 6rem;
        row-gap: 2rem;

        ul {
            list-style: none;

            li {
                display: grid;
                grid-template-columns: auto 1fr;
                column-gap: 6px;
                align-items: baseline;
                margin-top: 12px;

                ${({ theme }) => theme.mq.bigDesktop} {
                    margin-top: 2rem;
                }
            }
        }

        ${({ theme }) => theme.mq.tablet} {
            grid-template-columns: 1fr 1fr;

            &:nth-child(2) {
                article {
                    grid-column: 2;
                    grid-row: 1;
                }
            }
        }

        ${({ theme }) => theme.mq.desktop} {
            /* column-gap: 8rem; */
        }

        ${({ theme }) => theme.mq.huge} {
            column-gap: 8rem;
            article {
                padding-bottom: 6rem;
            }
        }
    }
`;

export const StyledImg = styled.div`
    /*  width: 600px; */

    /* ${({ theme }) => theme.mq.tablet} {
        width: 100%;
    } */
`;
