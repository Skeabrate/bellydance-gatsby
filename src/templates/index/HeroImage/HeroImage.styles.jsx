import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';

export const StyledBgImage = styled(BgImage)`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    row-gap: 100px;
`;

export const StyledBgTitle = styled.div`
    position: relative;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};

    h1 {
        font-family: ${({ theme }) => theme.fontFamily.greatVibes};
        font-weight: 400;
        font-size: 3.8rem;
        /* text-shadow: 1px 1px 1px black; */

        ${({ theme }) => theme.mq.tablet} {
            font-size: 5.4rem;
        }
    }

    p {
        margin: 0 0 15px;
    }
`;

export const StyledDarken = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.1;
`;
