import styled from 'styled-components';

export const Wrapper = styled.article`
    height: 100%;
    box-shadow: 0px 0px 40px -30px rgba(0, 0, 0, 1);
`;

export const StyledImgContainer = styled.div`
    overflow: hidden;
    cursor: pointer;

    ${({ theme }) => theme.mq.bigDesktop} {
        height: 350px;
    }

    div {
        ${({ theme }) => theme.mq.bigDesktop} {
            position: static;
        }
    }

    img {
        ${({ theme }) => theme.mq.bigDesktop} {
            height: 350px;
        }
    }
`;

export const StyledPostContent = styled.div`
    padding: 20px;
    margin-bottom: 70px;

    ${({ theme }) => theme.mq.tablet} {
        padding: 40px;
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
