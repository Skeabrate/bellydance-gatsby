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

export const StyledFirstSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 50px;
    row-gap: 50px;
    margin-bottom: 80px;

    ${({ theme }) => theme.mq.tablet} {
        margin-bottom: 120px;
    }

    h2 {
        font-size: ${({ theme }) => theme.fontSize.paragraph};
        margin-bottom: 8px;
    }
`;

export const StyledFirstSectionImg = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 50px;
    row-gap: 30px;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
    }

    img {
        width: 100%;
    }
`;
