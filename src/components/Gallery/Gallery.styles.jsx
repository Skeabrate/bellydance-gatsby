import styled from 'styled-components';

export const Wrapper = styled.div`
    columns: 1;
    column-gap: 6px;

    ${({ theme }) => theme.mq.tablet} {
        columns: 2;
    }

    ${({ theme }) => theme.mq.desktop} {
        columns: 3;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        columns: 4;
    }
`;

export const StyledItem = styled.div`
    position: relative;
    margin-bottom: 6px;
    overflow: hidden;
    cursor: pointer;

	&::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        &:hover {
            ::after {
                opacity: 0.1;
            }

            img {
                transform: scale(1.05);
            }
        }
    }

    img {
        transition: all 0.3s ease-in-out !important;
    }
`;
