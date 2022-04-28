import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import LightBoxContext from 'context/LightBoxContext';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Wrapper, StyledItem } from './Gallery.styles';

export default function Gallery({ data }) {
  const { setImgIndex, setLightBoxData } = useContext(LightBoxContext);

  const passIndexToLightBox = (index) => {
    document.body.style.overflow = 'hidden';
    setImgIndex(index);
  };

  useEffect(() => {
    setLightBoxData(data);

    return () => setLightBoxData([]);
  }, [data, setLightBoxData]);

  return (
    <Wrapper>
      {data.map(({ gatsbyImageData }, index) => (
        <StyledItem key={index} onClick={() => passIndexToLightBox(index)}>
          <GatsbyImage
            image={gatsbyImageData}
            alt="Agnieszka Świeczkowska Leyla bellydance"
          />
        </StyledItem>
      ))}
    </Wrapper>
  );
}

Gallery.propTypes = {
  data: PropTypes.array.isRequired,
};
