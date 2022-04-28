import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import LightBoxContext from 'context/LightBoxContext';
import {
  Wrapper,
  StyledPyramidDate,
  StyledPostContent,
  StyledImgContainer,
  StyledImg,
  StyledLegend,
  StyledVideo,
} from './Post.styles';

const Post = ({ title, description, meta, assets, video }) => {
  const { setImgIndex, setLightBoxData } = useContext(LightBoxContext);

  const handleOpenLightBox = () => {
    setImgIndex(0);
    setLightBoxData(assets);
    document.body.style.overflow = 'hidden';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  };

  return (
    <Wrapper>
      {assets && (
        <StyledImgContainer>
          <StyledImg onClick={handleOpenLightBox}>
            <GatsbyImage
              image={assets[0].gatsbyImageData}
              alt="Agnieszka Świeczkowska Leyla bellydance"
            />
          </StyledImg>

          <StyledLegend>
            {assets.map((item, index) => (
              <div key={index}></div>
            ))}
          </StyledLegend>
        </StyledImgContainer>
      )}

      <StyledPostContent>
        <h2>{title}</h2>

        {description.value.document.children.map(({ children }, index) => (
          <p key={index}>{children[0].value}</p>
        ))}

        {video && (
          <StyledVideo>
            <p>Sprawdź filmik:</p>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              {video.url}
            </a>
          </StyledVideo>
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
