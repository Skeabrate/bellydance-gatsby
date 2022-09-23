import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './HeroImageContainer.styles';
import { getImage } from 'gatsby-plugin-image';
import PyramidScroll from 'components/PyramidScroll/PyramidScroll';

const HeroImageContainer = ({ placeholderImage }) => {
  const pluginImage = getImage(placeholderImage);

  return (
    <Styled.BackgroundImage image={pluginImage}>
      <PyramidScroll />
    </Styled.BackgroundImage>
  );
};

HeroImageContainer.propTypes = {
  placeholderImage: PropTypes.object.isRequired,
};

export default HeroImageContainer;
