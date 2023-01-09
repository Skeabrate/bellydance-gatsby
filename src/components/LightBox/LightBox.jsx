import React, { useContext, useState } from 'react';
import * as Styled from './LightBox.styles';
import Slider from 'react-touch-drag-slider';
import ClipLoader from 'react-spinners/ClipLoader';
import { document } from 'browser-monads';
import { closeModal } from 'utils/closeModal';
import LightBoxContext from 'context/LightBoxContext';
import Close from 'assets/images/SVG/x.svg';
import LeftArrow from 'assets/images/SVG/leftArrow.svg';
import RightArrow from 'assets/images/SVG/rightArrow.svg';
import Video from 'components/Video/Video';

const LightBox = () => {
  const [isLoaded, setIsLoaded] = useState({});
  const { lightBoxData, setImgIndex, imgIndex } = useContext(LightBoxContext);
  const bodyStyleTop = document.body.style.top;

  const handleCloseGallery = () => {
    closeModal(bodyStyleTop);
    setImgIndex(false);
  };

  const handleFinishedIndex = (i) => setImgIndex(i);

  const handleLoad = (index) => {
    setIsLoaded((state) => ({
      ...state,
      [index]: true,
    }));
  };

  const next = () => imgIndex < lightBoxData?.length - 1 && setImgIndex((state) => state + 1);

  const previous = () => imgIndex > 0 && setImgIndex((state) => state - 1);

  return (
    <Styled.Wrapper>
      <Styled.Counter>{`${imgIndex + 1} / ${lightBoxData.length}`}</Styled.Counter>
      <Styled.CloseButton onClick={handleCloseGallery}>
        <Close />
      </Styled.CloseButton>
      {imgIndex ? (
        <Styled.SwitchButtonLeft
          onClick={previous}
          left
        >
          <LeftArrow />
        </Styled.SwitchButtonLeft>
      ) : null}
      {imgIndex !== lightBoxData?.length - 1 && (
        <Styled.SwitchButtonRight
          onClick={next}
          right
        >
          <RightArrow />
        </Styled.SwitchButtonRight>
      )}

      <Slider
        onSlideComplete={handleFinishedIndex}
        activeIndex={imgIndex}
        threshHold={100}
      >
        {lightBoxData.map(({ gatsbyImageData, description, url }, index) => (
          <Styled.SliderItem key={index}>
            {gatsbyImageData ? (
              <>
                <img
                  src={gatsbyImageData.images.fallback.src}
                  alt={description || 'Agnieszka Świeczkowska - Leyla Bellydance'}
                  onLoad={() => handleLoad(index)}
                />
                {!isLoaded[index] && (
                  <Styled.Loader>
                    <ClipLoader color='#9c9c9c' />
                  </Styled.Loader>
                )}
              </>
            ) : url ? (
              <Video
                preventDefault
                source={url}
              />
            ) : null}
          </Styled.SliderItem>
        ))}
      </Slider>
    </Styled.Wrapper>
  );
};

export default LightBox;
