import styled from 'styled-components';

export const StyledSection = styled.section`
  display: grid;
  column-gap: ${({ theme }) => theme.spacing.columnGap};
  row-gap: 3rem;
  align-items: flex-start;

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
    border-radius: 0px;

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
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;

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
