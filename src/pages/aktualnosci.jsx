import React from 'react';
import { graphql } from 'gatsby';
import MainWrapper from 'components/MainWrapper/MainWrapper';
import HeroImage from 'templates/Aktualnosci/HeroImage/HeroImage';
import Content from 'templates/Aktualnosci/Content';

const aktualnosci = ({ data }) => {
    return (
        <MainWrapper>
            <HeroImage />

            <Content posts={data} />
        </MainWrapper>
    );
};

export default aktualnosci;

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
