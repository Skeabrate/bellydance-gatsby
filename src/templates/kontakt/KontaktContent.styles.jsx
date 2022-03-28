import styled from 'styled-components';

export const StyledSection = styled.section`
    display: grid;
    column-gap: 6rem;
    row-gap: 3rem;
    align-items: flex-end;

    h2 {
        font-size: ${({ theme }) => theme.fontSize.paragraph};
        font-weight: 400;
        margin-bottom: 0;
    }

    p {
        display: flex;
        align-items: center;
        margin-block: 1.8rem;

        a {
            margin-left: 0.6rem;
            color: ${({ theme }) => theme.colors.black};
        }
    }

    svg {
        margin-right: 1rem;

        path {
            fill: ${({ theme }) => theme.colors.sand};
        }
    }

    ${({ theme }) => theme.mq.desktop} {
        grid-template-columns: 1fr 1fr;
    }

    ${({ theme }) => theme.mq.huge} {
        column-gap: 8rem;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    textarea {
        resize: none;
        height: 200px;
    }
`;
