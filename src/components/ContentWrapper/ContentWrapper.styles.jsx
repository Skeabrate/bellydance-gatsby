import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 2rem;

    h2 {
        font-size: ${({ theme }) => theme.fontSize.paragraph};
        margin-bottom: 0.6rem;
    }

    ${({ theme }) => theme.mq.tablet} {
        padding: 0 4rem;
    }

    ${({ theme }) => theme.mq.desktop} {
        padding: 0 6rem;

        h2 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }
    }

    ${({ theme }) => theme.mq.huge} {
        padding: 0 14rem;
    }
`;
