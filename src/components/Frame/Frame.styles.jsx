import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: ${({ $isFlex }) =>
    $isFlex && 'flex'}; /* for video to fit container */
`;

export const StyledFrame = styled.div`
  display: ${({ $hideMobile }) => ($hideMobile ? 'none' : 'initial')};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.sand};
  width: 160px;
  height: 5px;
  bottom: -10px;
  right: 50%;
  transform: translateX(50%);

  ${({ theme }) => theme.mq.tablet} {
    display: initial;
    width: 100px;
    height: 100px;
    transform: unset;
    transition: transform 0.3s 0.2s ease-in-out;

    ${({ $upRight, $downRight, $startAnimation }) => {
      if ($upRight)
        return {
          top: 0,
          right: 0,
          transform: $startAnimation && 'translate(20px, -20px)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 90% 100%, 90% 10%, 0 10%)',
        };
      if ($downRight)
        return {
          right: 0,
          bottom: 0,
          transform: $startAnimation && 'translate(20px, 20px)',
          clipPath: 'polygon(90% 90%, 90% 0, 100% 0, 100% 100%, 0 100%, 0 90%)',
        };
      else
        return {
          left: 0,
          bottom: 0,
          transform: $startAnimation && 'translate(-20px, 20px)',
          clipPath: 'polygon(10% 0, 10% 90%, 100% 90%, 100% 100%, 0 100%, 0 0)',
        };
    }};
  }
`;
