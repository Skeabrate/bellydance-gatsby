import styled from 'styled-components';

export const StyledSection = styled.section`
    display: grid;
    column-gap: ${({ theme }) => theme.spacing.columnMobile};
    row-gap: 3rem;
    align-items: flex-start;

    h2 {
        font-size: ${({ theme }) => theme.fontSize.paragraph};
        margin-bottom: 0.6rem;

        ${({ theme }) => theme.mq.desktop} {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
    }

    p:last-child {
        display: flex;
        align-items: center;
        margin-block: 3rem;

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
        column-gap: ${({ theme }) => theme.spacing.columnHuge};
        align-items: center;
    }
`;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    input,
    textarea {
        padding: 1.4rem;
        border: 1px solid ${({ theme }) => theme.colors.black};
        margin-bottom: 2rem;

        &:focus {
            outline: none;
            border: 1px solid ${({ theme }) => theme.colors.sand};
            box-shadow: 0px 8px 15px -10px rgba(115, 124, 142, 0.3);
        }
    }

    input:last-child {
        width: 200px;
        background: transparent;
        cursor: pointer;
        transition: all 0.15s ease-in-out;

        &:hover {
            border: 1px solid ${({ theme }) => theme.colors.sand};
            box-shadow: 0px 8px 15px -10px rgba(115, 124, 142, 0.3);
        }
    }

    textarea {
        resize: none;
        height: 250px;
    }
`;
