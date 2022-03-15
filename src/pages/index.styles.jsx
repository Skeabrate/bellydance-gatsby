import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';

export const StyledBgImage = styled(BgImage)`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    row-gap: 100px;

    div {
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
    }
`;

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
