import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Post.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useScroll } from 'hooks/useScroll';
import { StructuredText } from 'react-datocms';
import LightBoxContext from 'context/LightBoxContext';

const Post = ({ title, description, meta, assets, date }) => {
  const { setImgIndex, setLightBoxData } = useContext(LightBoxContext);
  const { setBodyOverflowToHidden } = useScroll();

  const handleOpenLightBox = (index) => {
    setImgIndex(index);
    setLightBoxData(assets);
    setBodyOverflowToHidden();
  };

  return (
    <Styled.Wrapper>
      {assets && assets.length ? (
        <Styled.MediaContainer>
          <Styled.Media onClick={() => handleOpenLightBox(0)}>
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
              >
                <source
                  src={`${assets[0].video.mp4Url}#t=0.1`}
                  type='video/mp4'
                />
              </video>
            ) : null}
          </Styled.Media>
        </Styled.MediaContainer>
      ) : null}

      <Styled.PostContent>
        <Styled.Legend>
          {assets?.map((item, index) => (
            <button
              onClick={() => handleOpenLightBox(index)}
              key={index}
            ></button>
          ))}
        </Styled.Legend>

        <h2>{title}</h2>

        <StructuredText data={description} />
      </Styled.PostContent>

      <Styled.PyramidDate>{date || meta.firstPublishedAt.slice(0, 10)}</Styled.PyramidDate>
    </Styled.Wrapper>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  assets: PropTypes.array,
  date: PropTypes.any,
};

export default Post;
