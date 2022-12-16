import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './Post.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StructuredText } from 'react-datocms';
import { useScroll } from 'hooks/useScroll';
import { getFirstPublishedAtDate } from 'utils/getFirstPublishedAtDate';
import LightBoxContext from 'context/LightBoxContext';
import PyramidDate from 'components/PyramidDate/PyramidDate';
import Video from 'components/Video/Video';

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
              <Video
                source={assets[0].video.mp4Url}
                thumbnailUrl={assets[0].video.thumbnailUrl}
              />
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

      <PyramidDate date={date || getFirstPublishedAtDate(meta.firstPublishedAt)} />
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
