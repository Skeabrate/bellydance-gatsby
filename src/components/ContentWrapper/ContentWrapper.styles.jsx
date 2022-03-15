import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 20px;

    h2 {
        font-size: ${({ theme }) => theme.fontSize.paragraph};
        margin-bottom: 8px;
    }

    ${({ theme }) => theme.mq.tablet} {
        padding: 0 40px;
    }

    ${({ theme }) => theme.mq.desktop} {
        padding: 0 100px;
    }
`;
