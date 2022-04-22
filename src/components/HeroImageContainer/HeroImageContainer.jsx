import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { getImage } from 'gatsby-plugin-image';
import { StyledBgImage } from './HeroImageContainer.styles';
import PyramidScroll from 'components/PyramidScroll/PyramidScroll';

const HeroImageContainer = ({ placeholderImage }) => {
  const pluginImage = getImage(placeholderImage);

  const [scrollY, setScrollY] = useState(0);

  const contRef = useRef(null);
  const { current: elContainer } = contRef;

  let progress = 0;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleSCroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleSCroll, { passive: true });
  }, [handleSCroll]);

  const style = {
    position: 'sticky',
    top: '120px',
    zIndex: '0',
    transform: `translateY(-${progress * 20}vh)`,
  };

  return (
    <div ref={contRef} style={style}>
      <StyledBgImage image={pluginImage} progress={progress}>
        <PyramidScroll />
      </StyledBgImage>
    </div>
  );
};

HeroImageContainer.propTypes = {
  placeholderImage: PropTypes.object.isRequired,
};

export default HeroImageContainer;
