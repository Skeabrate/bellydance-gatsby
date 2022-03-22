import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

export const StyledPostsContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 120px;
    margin-top: 60px;

    ${({ theme }) => theme.mq.tablet} {
        margin-top: 80px;
    }

    article {
        box-shadow: 0px 0px 40px -30px rgba(0, 0, 0, 1);
    }
`;

export const StyledPostContent = styled.div`
    padding: 20px;

    ${({ theme }) => theme.mq.tablet} {
        padding: 40px;
    }
`;

export const StyledStaticImage = styled(StaticImage)`
    width: 100px;
    height: 200px;

    ${({ theme }) => theme.mq.desktop} {
        height: 40vh;
    }
`;

export const StyledPyramidDate = styled.p`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 5px;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.caption};
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.sand};
    width: 130px;
    height: 60px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;
