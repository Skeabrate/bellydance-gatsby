import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import 'lightgallery.js/dist/css/lightgallery.css';

import {
  Wrapper,
  StyledPyramidDate,
  StyledPostContent,
  StyledImgContainer,
  StyledImg,
  StyledLegend,
} from './Post.styles';

const Post = ({ title, description, meta, assets, video }) => {
  return (
    <Wrapper>
      {assets && (
        <LightgalleryProvider>
          <StyledImgContainer>
            {assets.map(({ gatsbyImageData }, index) => (
              <LightgalleryItem
                group="posts"
                key={index}
                src={gatsbyImageData.images.fallback.src}
              >
                {!index && (
                  <StyledImg>
                    <GatsbyImage
                      image={gatsbyImageData}
                      alt="Agnieszka Świeczkowska Leyla bellydance"
                    />
                  </StyledImg>
                )}
              </LightgalleryItem>
            ))}

            <StyledLegend>
              {assets.map((item, index) => (
                <div key={index}></div>
              ))}
            </StyledLegend>
          </StyledImgContainer>
        </LightgalleryProvider>
      )}

      <StyledPostContent>
        <h2>{title}</h2>

        {description.value.document.children.map(({ children }, index) => (
          <p key={index}>{children[0].value}</p>
        ))}

        {video && (
          <div style={{ paddingTop: '6px' }}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              Sprawdź filmik
            </a>
          </div>
        )}
      </StyledPostContent>

      <StyledPyramidDate>
        {meta.firstPublishedAt.slice(0, 10)}
      </StyledPyramidDate>
    </Wrapper>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  assets: PropTypes.array,
  video: PropTypes.object,
};

export default Post;
