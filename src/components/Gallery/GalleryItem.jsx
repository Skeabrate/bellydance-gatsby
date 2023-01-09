import React, { useRef } from 'react';
import * as Styled from './Gallery.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useAnimation } from 'hooks/useAnimation';
import Video from 'components/Video/Video';

const GalleryItem = ({
  galleryItem: { gatsbyImageData, description, url },
  passIndexToLightBox,
}) => {
  const itemRef = useRef(null);
  const { isElementVisible } = useAnimation({ ref: itemRef, treshold: 80 });

  return (
    <Styled.GalleryItem
      ref={itemRef}
      onClick={passIndexToLightBox}
      $appearGalleryItem={isElementVisible}
    >
      {gatsbyImageData ? (
        <GatsbyImage
          image={gatsbyImageData}
          alt={description || 'Agnieszka Świeczkowska Leyla bellydance'}
        />
      ) : url ? (
        <Video source={url} />
      ) : null}
    </Styled.GalleryItem>
  );
};

export default GalleryItem;
