import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 2rem;

    h2 {
        font-family: ${({ theme }) => theme.fontFamily.greatVibes};
        font-size: ${({ theme }) => theme.fontSize.headingMobile};
        line-height: 1;
        font-weight: 400;
        margin-bottom: 0.6rem;
    }

    ${({ theme }) => theme.mq.tablet} {
        padding: 0 4rem;

        h2 {
            font-size: ${({ theme }) => theme.fontSize.heading};
            margin-bottom: 1rem;
        }
    }

    ${({ theme }) => theme.mq.desktop} {
        padding: 0 6rem;
    }

    ${({ theme }) => theme.mq.huge} {
        padding: 0 14rem;
    }
`;
