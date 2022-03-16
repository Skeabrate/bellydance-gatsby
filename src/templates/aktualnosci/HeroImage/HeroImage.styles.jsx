import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';

export const StyledBgImage = styled(BgImage)`
    height: 30vh;
    width: 100%;

    ${({ theme }) => theme.mq.tablet} {
        height: 45vh;
    }

    ${({ theme }) => theme.mq.desktop} {
        height: 60vh;
    }

    ${({ theme }) => theme.mq.huge} {
        height: 70vh;
    }
`;
