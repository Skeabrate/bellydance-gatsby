import React, { useRef } from 'react';
import * as Styled from './Gallery.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useAnimation } from '../../hooks/useAnimation';
import Video from 'components/Video/Video';

const GalleryItem = ({ galleryItem: { gatsbyImageData, alt, video }, passIndexToLightBox }) => {
  const itemRef = useRef(null);
  const { isElementVisible } = useAnimation({ ref: itemRef, treshold: 40 });

  return (
    <Styled.GalleryItem
      ref={itemRef}
      onClick={passIndexToLightBox}
      $appearGalleryItem={isElementVisible}
    >
      {gatsbyImageData ? (
        <GatsbyImage
          image={gatsbyImageData}
          alt={alt || 'Agnieszka Świeczkowska Leyla bellydance'}
        />
      ) : video ? (
        <Video
          source={video.mp4Url}
          thumbnailUrl={video.thumbnailUrl}
        />
      ) : null}
    </Styled.GalleryItem>
  );
};

export default GalleryItem;
