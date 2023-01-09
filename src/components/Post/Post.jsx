import React, { useContext } from 'react';
import * as Styled from './Post.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { useScroll } from 'hooks/useScroll';
import { getDate } from 'utils/getDate';
import LightBoxContext from 'context/LightBoxContext';
import PyramidDate from 'components/PyramidDate/PyramidDate';
import Video from 'components/Video/Video';
import PostOrnament from 'components/PostOrnament/PostOrnament';

const Post = ({ title, description, createdAt, gallery, date }) => {
  const { setImgIndex, setLightBoxData } = useContext(LightBoxContext);
  const { setBodyOverflowToHidden } = useScroll();

  const handleOpenLightBox = (index) => {
    setImgIndex(index);
    setLightBoxData(gallery);
    setBodyOverflowToHidden();
  };

  return (
    <PostOrnament>
      <Styled.Wrapper>
        <Styled.MediaContainer>
          <Styled.Media onClick={() => handleOpenLightBox(0)}>
            {gallery[0].gatsbyImageData ? (
              <GatsbyImage
                image={gallery[0].gatsbyImageData}
                alt={gallery[0].description || 'Agnieszka Świeczkowska Leyla bellydance'}
              />
            ) : gallery[0].url ? (
              <Video source={gallery[0].url} />
            ) : null}
          </Styled.Media>
        </Styled.MediaContainer>

        <Styled.PostContent>
          <Styled.Legend>
            {gallery.map((item, index) => (
              <button
                onClick={() => handleOpenLightBox(index)}
                key={index}
              ></button>
            ))}
          </Styled.Legend>

          <h2>{title}</h2>

          {renderRichText(description)}
        </Styled.PostContent>

        <PyramidDate date={getDate(date, createdAt)} />
      </Styled.Wrapper>
    </PostOrnament>
  );
};

export default Post;
