import styled from 'styled-components';

export const Wrapper = styled.article`
  height: 100%;
  box-shadow: 0px 0px 30px -15px rgba(0, 0, 0, 1);

  ul {
    padding-left: 20px;
  }
`;

export const StyledImgContainer = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.sand};
  position: relative;
  max-height: 300px;

  img {
    max-height: 300px;
  }

  div {
    position: static;
  }

  @media (min-width: 500px) {
    max-height: unset;
    height: 450px;

    img {
      max-height: unset;
      height: 450px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 350px;

    img {
      height: 350px;
    }
  }
`;

export const StyledImg = styled.div`
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
    z-index: 1;
  }

  &:hover::after {
    opacity: 0.1;
  }
`;

export const StyledLegend = styled.div`
  position: absolute !important;
  z-index: 0;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  column-gap: 6px;
  max-width: 300px;
  overflow-x: hidden;

  div {
    width: 12px;
    height: 12px;
    background-color: #eeeeee;
    border-radius: 100px;
    border: 1px solid #c7c7c7;
  }
`;

export const StyledPostContent = styled.div`
  padding: 2rem;
  margin-bottom: 7rem;
  position: relative;
  z-index: 1;

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
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.caption};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.sand};
  width: 130px;
  height: 60px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;
