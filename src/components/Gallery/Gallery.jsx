import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Gallery.styles';
import LightboxContext from 'context/LightboxContext';
import GalleryItem from './GalleryItem';

export default function Gallery({ data }) {
  const { openLightbox } = useContext(LightboxContext);

  return (
    <Styled.Wrapper>
      {data.map((galleryItem, index) => (
        <GalleryItem
          key={index}
          galleryItem={galleryItem}
          openLightbox={() => openLightbox(data, index)}
        />
      ))}
    </Styled.Wrapper>
  );
}

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
};
