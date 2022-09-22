import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import LightBoxContext from 'context/LightBoxContext';
import { useScroll } from 'hooks/useScroll';
import { StructuredText } from 'react-datocms';
import {
  Wrapper,
  StyledPyramidDate,
  StyledPostContent,
  StyledImgContainer,
  StyledImg,
  StyledLegend,
} from './Post.styles';

const Post = ({ title, description, meta, assets }) => {
  const { setImgIndex, setLightBoxData } = useContext(LightBoxContext);
  const { setBodyOverflowToHidden } = useScroll();

  const handleOpenLightBox = () => {
    setImgIndex(0);
    setLightBoxData(assets);
    setBodyOverflowToHidden();
  };

  return (
    <Wrapper>
      {assets && assets.length ? (
        <StyledImgContainer>
          <StyledImg onClick={handleOpenLightBox}>
            {assets[0].gatsbyImageData ? (
              <GatsbyImage
                image={assets[0].gatsbyImageData}
                alt={assets[0].alt || 'Agnieszka Świeczkowska Leyla bellydance'}
              />
            ) : assets[0].video ? (
              <video
                preload='metadata'
                controls
                width='100%'
                height='100%'
                style={{ zIndex: '1' }}
              >
                <source
                  src={`${assets[0].video.mp4Url}#t=0.1`}
                  type='video/mp4'
                />
              </video>
            ) : null}
          </StyledImg>

          <StyledLegend>
            {assets.map((item, index) => (
              <div key={index}></div>
            ))}
          </StyledLegend>
        </StyledImgContainer>
      ) : null}

      <StyledPostContent>
        <h2>{title}</h2>

        <StructuredText data={description} />
      </StyledPostContent>

      <StyledPyramidDate>{meta.firstPublishedAt.slice(0, 10)}</StyledPyramidDate>
    </Wrapper>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  assets: PropTypes.array,
};

export default Post;
