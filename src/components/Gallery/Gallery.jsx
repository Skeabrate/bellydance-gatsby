import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import 'lightgallery.js/dist/css/lightgallery.css';
import Frame from 'components/Frame/Frame';

import { Wrapper, StyledItem } from './Gallery.styles';

export default function Gallery({ data }) {
  return (
    <LightgalleryProvider>
      <Frame upRight hideMobile>
        <Frame>
          <Wrapper>
            {data.map(({ gatsbyImageData }, index) => (
              <LightgalleryItem
                group="gallery"
                key={index}
                src={gatsbyImageData.images.fallback.src}
              >
                <StyledItem>
                  <GatsbyImage
                    image={gatsbyImageData}
                    alt="Agnieszka Świeczkowska Leyla bellydance"
                  />
                </StyledItem>
              </LightgalleryItem>
            ))}
          </Wrapper>
        </Frame>
      </Frame>
    </LightgalleryProvider>
  );
}

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
};
