import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 80px 20px;

    ${({ theme }) => theme.mq.tablet} {
        padding: 110px 40px;
    }

    ${({ theme }) => theme.mq.desktop} {
        padding: 140px 100px;
    }
`;
