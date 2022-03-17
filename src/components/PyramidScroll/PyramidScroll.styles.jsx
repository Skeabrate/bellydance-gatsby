import styled from 'styled-components';

export const StyledPyramid = styled.button`
    width: 180px;
    height: 90px;
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 20px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    border: none;
`;
