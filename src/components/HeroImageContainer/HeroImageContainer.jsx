import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';
import { StyledBgImage } from './HeroImageContainer.styles';
import PyramidScroll from 'components/PyramidScroll/PyramidScroll';

const HeroImageContainer = ({ placeholderImage }) => {
  const pluginImage = getImage(placeholderImage);

  return (
    <StyledBgImage image={pluginImage}>
      <PyramidScroll />
    </StyledBgImage>
  );
};

HeroImageContainer.propTypes = {
  placeholderImage: PropTypes.object.isRequired,
};

export default HeroImageContainer;
