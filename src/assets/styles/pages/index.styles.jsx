import styled from 'styled-components';
import { BgImage } from 'gbimage-bridge';

/* HeroImage */
export const StyledBgImage = styled(BgImage)`
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    row-gap: 6rem;

    ${({ theme }) => theme.mq.bigDesktop} {
        row-gap: 8rem;
    }
`;

export const StyledBgTitle = styled.div`
    position: relative;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};

    h1 {
        font-family: ${({ theme }) => theme.fontFamily.greatVibes};
        font-weight: 400;
        font-size: 3.8rem;
        text-shadow: 5px 5px 10px hsla(0, 0%, 0%, 0.5);

        ${({ theme }) => theme.mq.desktop} {
            font-size: 4.2rem;
        }

        ${({ theme }) => theme.mq.bigDesktop} {
            font-size: 5.4rem;
        }
    }

    p {
        margin: 1rem 0 1.5rem;
        text-shadow: 5px 5px 10px hsla(0, 0%, 0%, 0.5);
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

/* Content */
export const StyledFirstSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    column-gap: ${({ theme }) => theme.spacing.columnGap};
    row-gap: 3rem;
    margin-bottom: 3rem;

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
        row-gap: 5rem;
        margin-bottom: 8rem;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const StyledFirstSectionImg = styled.div`
    display: grid;
    column-gap: ${({ theme }) => theme.spacing.columnGap};
    row-gap: 1rem;

    @media (min-width: 500px) {
        row-gap: 3rem;
    }

    ${({ theme }) => theme.mq.tablet} {
        grid-template-columns: 1fr 1fr;
    }
`;

export const StyledSecondSectionImg = styled.div`
    display: grid;
    column-gap: 1rem;
    row-gap: 1rem;

    @media (min-width: 500px) {
        grid-template-columns: 1fr 1fr;
        row-gap: 3rem;
    }
`;

export const StyledThridArticle = styled.article`
    margin-bottom: 4rem;

    ${({ theme }) => theme.mq.tablet} {
        text-align: center;
        margin-bottom: 6rem;
    }
`;
