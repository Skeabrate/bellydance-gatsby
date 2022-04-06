import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
    Wrapper,
    StyledPyramidDate,
    StyledPostContent,
    StyledImgContainer,
} from './Post.styles';

const Post = ({
    title,
    description,
    meta,
    assets,
    video,
    setImgData,
    setIsOpen,
    setPhotoIndex,
}) => {
    const lightBoxHandler = (index) => {
        setIsOpen(true);
        setPhotoIndex(index);
        setImgData(
            assets.map(
                ({ gatsbyImageData }) => gatsbyImageData.images.fallback.src
            )
        );
    };

    return (
        <Wrapper>
            <StyledImgContainer>
                {assets?.map((item, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => lightBoxHandler(index)}
                    >
                        <GatsbyImage
                            key={index}
                            image={item.gatsbyImageData}
                            alt="Agnieszka Świeczkowska Leyla bellydance"
                        />
                    </button>
                ))}
            </StyledImgContainer>

            <StyledPostContent>
                <h2>{title}</h2>

                {description.value.document.children.map(
                    ({ children }, index) => (
                        <p key={index}>{children[0].value}</p>
                    )
                )}

                {video && (
                    <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {video.url}
                    </a>
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
    setImgData: PropTypes.func.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    setPhotoIndex: PropTypes.func.isRequired,
};

export default Post;
