import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Gallery.styles';
import { useScroll } from 'hooks/useScroll';
import LightBoxContext from 'context/LightBoxContext';
import GalleryItem from './GalleryItem';

export default function Gallery({ data }) {
  const { setImgIndex, setLightBoxData } = useContext(LightBoxContext);
  const { setBodyOverflowToHidden } = useScroll();

  const passIndexToLightBox = (index) => {
    setBodyOverflowToHidden();
    setImgIndex(index);
  };

  useEffect(() => {
    setLightBoxData(data);

    return () => setLightBoxData([]);
  }, [data, setLightBoxData]);

  return (
    <Styled.Wrapper>
      {data.map((galleryItem, index) => (
        <GalleryItem
          key={index}
          galleryItem={galleryItem}
          passIndexToLightBox={() => passIndexToLightBox(index)}
        />
      ))}
    </Styled.Wrapper>
  );
}

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
};
