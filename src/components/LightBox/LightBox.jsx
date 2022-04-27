import React, { useContext, useState } from 'react';
import LightBoxContext from 'context/LightBoxContext';
import Close from 'assets/images/SVG/x.svg';
import LeftArrow from 'assets/images/SVG/leftArrow.svg';
import RightArrow from 'assets/images/SVG/rightArrow.svg';
import Slider from 'react-touch-drag-slider';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  SliderWrapper,
  SwitchButtonLeft,
  SwitchButtonRight,
  CloseButton,
  StyledLoader,
} from './LightBox.styles';

const LightBox = () => {
  const { lightBoxData, setImgIndex, imgIndex } = useContext(LightBoxContext);
  const [isLoaded, setIsLoaded] = useState({});

  const handleCloseGallery = () => setImgIndex(false);
  const setFinishedIndex = (i) => setImgIndex(i);

  const handleLoad = (index) => {
    setIsLoaded((state) => ({
      ...state,
      [index]: true,
    }));
  };

  const next = () =>
    imgIndex < lightBoxData?.length - 1 && setImgIndex((state) => state + 1);

  const previous = () => imgIndex > 0 && setImgIndex((state) => state - 1);

  return (
    <SliderWrapper>
      <CloseButton onClick={handleCloseGallery}>
        <Close />
      </CloseButton>
      {imgIndex && (
        <SwitchButtonLeft onClick={previous} left>
          <LeftArrow />
        </SwitchButtonLeft>
      )}
      {imgIndex !== lightBoxData?.length - 1 && (
        <SwitchButtonRight onClick={next} right>
          <RightArrow />
        </SwitchButtonRight>
      )}

      <Slider
        onSlideComplete={setFinishedIndex}
        activeIndex={imgIndex}
        threshHold={100}
        transition={0.5}
        scaleOnDrag={true}
      >
        {lightBoxData.map(({ gatsbyImageData }, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img
              src={gatsbyImageData.images.fallback.src}
              alt="Agnieszka Świeczkowska - Leyla Bellydance"
              onLoad={() => handleLoad(index)}
            />
            {!isLoaded[index] && (
              <StyledLoader>
                <ClipLoader color="#9c9c9c" />
              </StyledLoader>
            )}
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default LightBox;
