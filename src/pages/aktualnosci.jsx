import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { useAktualnosciQuery } from 'hooks/useAktualnosciQuery';
import { useAktualnosciSort } from 'hooks/useAktualnosciSort';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeroImageContainer from 'components/HeroImageContainer/HeroImageContainer';
import Heading from 'components/Heading/Heading';
import Combobox from 'components/Combobox/Combobox';
import Frame from 'components/Frame/Frame';
import Post from 'components/Post/Post';

import { StyledPostsContainer } from 'assets/styles/pages/aktualnosci.styles';

const Aktualnosci = ({ data }) => {
    const [imgData, setImgData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const { placeholderImage } = useAktualnosciQuery();
    const { setSortDescending } = useAktualnosciSort(data);

    return (
        <MainWrapper>
            <HeroImageContainer placeholderImage={placeholderImage} />

            <ContentWrapper>
                <Heading
                    label="Co słychać w królestwie tańca orientalnego?"
                    isMain
                />

                <Combobox setSortDescending={setSortDescending} />

                <StyledPostsContainer>
                    {data.allDatoCmsPost.edges.map(
                        ({
                            node: {
                                id,
                                title,
                                description,
                                assets,
                                video,
                                meta,
                            },
                        }) => (
                            <Frame key={id} upRight>
                                <Post
                                    title={title}
                                    description={description}
                                    assets={assets}
                                    video={video}
                                    meta={meta}
                                    setImgData={setImgData}
                                    setIsOpen={setIsOpen}
                                    setPhotoIndex={setPhotoIndex}
                                />
                            </Frame>
                        )
                    )}
                </StyledPostsContainer>

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
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex(
                                (photoIndex + imgData.length - 1) %
                                    imgData.length
                            )
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % imgData.length)
                        }
                    />
                )}
            </ContentWrapper>
        </MainWrapper>
    );
};

export default Aktualnosci;

export const query = graphql`
    query AktualnosciQuery {
        allDatoCmsPost {
            edges {
                node {
                    assets {
                        gatsbyImageData(
                            layout: FULL_WIDTH
                            placeholder: BLURRED
                        )
                    }
                    description {
                        value
                    }
                    id
                    title
                    video {
                        height
                        url
                        width
                        thumbnailUrl
                    }
                    meta {
                        firstPublishedAt
                    }
                }
            }
        }
    }
`;
