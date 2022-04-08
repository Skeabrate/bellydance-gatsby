import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';
import 'lightgallery.js/dist/css/lightgallery.css';

import { Wrapper, StyledItem } from './Gallery.styles';

export default function Gallery({ data }) {
    return (
        <div>
            <LightgalleryProvider>
                <Wrapper>
                    {data.map(({ gatsbyImageData }, index) => (
                        <LightgalleryItem
                            group="gallery"
                            key={index}
                            src={gatsbyImageData.images.fallback.src}
                        >
                            <StyledItem>
                                <GatsbyImage
                                    image={gatsbyImageData}
                                    alt="Agnieszka Świeczkowska Leyla bellydance"
                                />
                            </StyledItem>
                        </LightgalleryItem>
                    ))}
                </Wrapper>
            </LightgalleryProvider>
        </div>
    );
}

Gallery.propTypes = {
    data: PropTypes.array.isRequired,
};
