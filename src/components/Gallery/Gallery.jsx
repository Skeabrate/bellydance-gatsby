import React, { Component } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Wrapper } from './Gallery.styles';

export default class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };

        this.props = props;
    }

    render() {
        const { photoIndex, isOpen } = this.state;
        const { data } = this.props;
        const imgData = data.allFile.edges.map(
            ({ node }) => node.childImageSharp.original.src
        );

        data.allFile.edges.sort((a, b) => {
            const first = a.node.childImageSharp.original.src.split('-')[0];
            const second = b.node.childImageSharp.original.src.split('-')[0];

            return (
                first.split('/static/img')[1] - second.split('/static/img')[1]
            );
        });

        return (
            <div>
                <Wrapper>
                    {data.allFile.edges.map(({ node }, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() =>
                                this.setState({
                                    isOpen: true,
                                    photoIndex: index,
                                })
                            }
                        >
                            <GatsbyImage
                                key={index}
                                image={node.childImageSharp.gatsbyImageData}
                                alt="image"
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
                                (photoIndex + imgData.length - 1) %
                                    imgData.length
                            ]
                        }
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex:
                                    (photoIndex + imgData.length - 1) %
                                    imgData.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % imgData.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}
