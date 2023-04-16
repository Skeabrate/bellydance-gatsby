import React, { useContext } from 'react';
import * as Styled from './Post.styles';
import { GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { getDate } from 'utils/getDate';
import LightboxContext from 'context/LightboxContext';
import PyramidDate from 'components/PyramidDate/PyramidDate';
import Video from 'components/Video/Video';
import PostOrnament from 'components/PostOrnament/PostOrnament';

const Post = ({ title, description, createdAt, gallery, date }) => {
  const { openLightbox } = useContext(LightboxContext);

  return (
    <PostOrnament>
      <Styled.Wrapper>
        <Styled.MediaContainer>
          <Styled.Media onClick={() => openLightbox(gallery)}>
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
            {gallery.map((legend, index) => (
              <button
                onClick={() => openLightbox(gallery, index)}
                key={index}
              ></button>
            ))}
          </Styled.Legend>

          <h2>{title}</h2>

          {description ? renderRichText(description) : null}
        </Styled.PostContent>

        <PyramidDate date={getDate(date, createdAt)} />
      </Styled.Wrapper>
    </PostOrnament>
  );
};

export default Post;
