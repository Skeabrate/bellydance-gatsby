import React from 'react';
import { graphql } from 'gatsby';
import { useAktualnosci } from 'hooks/useAktualnosci';

import MainWrapper from 'components/MainWrapper/MainWrapper';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import HeroImageContainer from 'components/HeroImageContainer/HeroImageContainer';
import Heading from 'components/Heading/Heading';
import Combobox from 'components/Combobox/Combobox';
import Frame from 'components/Frame/Frame';
import Post from 'components/Post/Post';

import { StyledPostsContainer } from 'assets/styles/pages/aktualnosci.styles';

const Aktualnosci = ({ data }) => {
    const { placeholderImage, setSortDescending } = useAktualnosci(data);

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
                                />
                            </Frame>
                        )
                    )}
                </StyledPostsContainer>
            </ContentWrapper>
        </MainWrapper>
    );
};

export default Aktualnosci;

export const query = graphql`
    query MyQuery {
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
