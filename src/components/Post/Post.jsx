import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

import {
    Wrapper,
    StyledPyramidDate,
    StyledPostContent,
    StyledImgContainer,
    StyledLegend,
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
    const lightBoxHandler = () => {
        setIsOpen(true);
        setPhotoIndex(0);
        setImgData(
            assets.map(
                ({ gatsbyImageData }) => gatsbyImageData.images.fallback.src
            )
        );
    };

    return (
        <Wrapper>
            {assets && (
                <StyledImgContainer onClick={lightBoxHandler}>
                    <GatsbyImage
                        image={assets[0].gatsbyImageData}
                        alt="Agnieszka Świeczkowska Leyla bellydance"
                    />

                    <StyledLegend>
                        {assets.map(({ gatsbyImageData }, index) => (
                            <img
                                key={index}
                                src={gatsbyImageData.images.fallback.src}
                                alt="Agnieszka Świeczkowska Leyla bellydance"
                            />
                        ))}
                    </StyledLegend>
                </StyledImgContainer>
            )}

            <StyledPostContent>
                <h2>{title}</h2>

                {description.value.document.children.map(
                    ({ children }, index) => (
                        <p key={index}>{children[0].value}</p>
                    )
                )}

                {video && (
                    <div style={{ paddingTop: '6px' }}>
                        <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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
    setImgData: PropTypes.func.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    setPhotoIndex: PropTypes.func.isRequired,
};

export default Post;
