import React, { useRef } from 'react';
import * as Styled from './Gallery.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useAnimation } from 'hooks/useAnimation';
import Video from 'components/Video/Video';

const GalleryItem = ({ galleryItem: { gatsbyImageData, description, url }, openLightbox }) => {
  const itemRef = useRef(null);
  const { isElementVisible } = useAnimation({ ref: itemRef, treshold: 80 });

  return (
    <Styled.GalleryItem
      ref={itemRef}
      onClick={openLightbox}
      $appearGalleryItem={isElementVisible}
    >
      {gatsbyImageData ? (
        <GatsbyImage
          image={gatsbyImageData}
          alt={
            description ||
            'Agnieszka Świeczkowska Leyla bellydance taniec brzucha, taniec orientalny Włocławek, Płock taniec brzucha, taniec orientalny Włocławek, Płock'
          }
        />
      ) : url ? (
        <Video source={url} />
      ) : null}
    </Styled.GalleryItem>
  );
};

export default GalleryItem;
