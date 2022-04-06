import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Wrapper } from './Gallery.styles';

const Gallery = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const imgData = data.allFile.edges.map(
        ({ node }) => node.childImageSharp.original.src
    );

    useCallback(
        () =>
            data.allFile.edges.sort((a, b) => {
                const first = a.node.childImageSharp.original.src.split('-')[0];
                const second =
                    b.node.childImageSharp.original.src.split('-')[0];

                return (
                    first.split('/static/img')[1] -
                    second.split('/static/img')[1]
                );
            }),
        [data.allFile.edges]
    )();

    return (
        <div>
            <Wrapper>
                {data.allFile.edges.map(({ node }, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsOpen(true);
                            setPhotoIndex(index);
                        }}
                    >
                        <GatsbyImage
                            key={index}
                            image={node.childImageSharp.gatsbyImageData}
                            alt="Agnieszka Świeczkowska Leyla bellydance"
                        />
                    </button>
                ))}
            </Wrapper>

            {isOpen && (
                <Lightbox
                    mainSrc={imgData[photoIndex]}
                    nextSrc={imgData[(photoIndex + 1) % imgData.length]}
                    prevSrc={
                        imgData[
                            (photoIndex + imgData.length - 1) % imgData.length
                        ]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(
                            (photoIndex + imgData.length - 1) % imgData.length
                        )
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % imgData.length)
                    }
                />
            )}
        </div>
    );
};

Gallery.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Gallery;
