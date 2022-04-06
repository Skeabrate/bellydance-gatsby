import styled from 'styled-components';

export const Wrapper = styled.article`
    height: 100%;
    box-shadow: 0px 0px 40px -30px rgba(0, 0, 0, 1);
`;

export const StyledImgContainer = styled.div`
    overflow: hidden;
    cursor: pointer;
    border: none;
    background: transparent;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    &:hover {
        ::after {
            opacity: 0.1;
        }
    }

    @media (min-width: 450px) {
        height: 450px;

        img {
            height: 450px;
        }

        div {
            position: static;
        }
    }

    ${({ theme }) => theme.mq.desktop} {
        height: 350px;

        img {
            height: 350px;
        }
    }
`;

export const StyledLegend = styled.div`
    position: absolute !important;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    column-gap: 6px;
    max-width: 300px;
    overflow-x: hidden;

    img {
        width: 30px;
        height: 30px;
        object-fit: cover;
        border: 2px solid ${({ theme }) => theme.colors.sand};
        border-radius: 100px;
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
