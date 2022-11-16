import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Gallery.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useScroll } from 'hooks/useScroll';
import LightBoxContext from 'context/LightBoxContext';
import Video from 'components/Video/Video';

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
      {data.map(({ gatsbyImageData, alt, video }, index) => (
        <Styled.GalleryItem
          key={index}
          onClick={() => passIndexToLightBox(index)}
        >
          {gatsbyImageData ? (
            <GatsbyImage
              image={gatsbyImageData}
              alt={alt || 'Agnieszka Świeczkowska Leyla bellydance'}
            />
          ) : video ? (
            <Video source={video.mp4Url} />
          ) : null}
        </Styled.GalleryItem>
      ))}
    </Styled.Wrapper>
  );
}

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
};
