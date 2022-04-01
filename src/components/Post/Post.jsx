import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
    Wrapper,
    StyledPyramidDate,
    StyledPostContent,
    StyledImgContainer,
} from './Post.styles';

const Post = ({ title, description, meta, assets, video }) => {
    console.log(video);
    return (
        <Wrapper>
            <StyledImgContainer>
                {assets?.map((item) => (
                    <GatsbyImage
                        key={item.gatsbyImageData.placeholder.fallback}
                        image={item.gatsbyImageData}
                        alt={title}
                    />
                ))}
            </StyledImgContainer>

            <StyledPostContent>
                <h2>{title}</h2>

                {description.value.document.children.map(
                    ({ children }, index) => (
                        <p key={index}>{children[0].value}</p>
                    )
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
