import styled from 'styled-components';

export const Wrapper = styled.article`
    height: 100%;
    box-shadow: 0px 0px 40px -30px rgba(0, 0, 0, 1);
`;

export const StyledImgContainer = styled.div`
    height: 40px;
    overflow: hidden;
    cursor: pointer;
    height: 40vh;

    img {
        height: 40vh;
    }

    div {
        position: static;
    }

    ${({ theme }) => theme.mq.bigDesktop} {
        height: 350px;

        img {
            height: 350px;
        }
    }
`;

export const StyledPostContent = styled.div`
    padding: 2rem;
    margin-bottom: 7rem;

    ${({ theme }) => theme.mq.tablet} {
        padding: 4rem;
    }
`;

export const StyledPyramidDate = styled.p`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
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
