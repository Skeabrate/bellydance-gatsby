import React from 'react';
import { graphql } from 'gatsby';
import HeroImage from 'templates/aktualnosci/HeroImage/HeroImage';
import MainWrapper from 'components/MainWrapper/MainWrapper';
import Content from 'templates/aktualnosci/Content/Content';

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
                        height
                        width
                        url
                    }
                    description {
                        value
                    }
                    id
                    date
                    title
                    video {
                        height
                        url
                        width
                        thumbnailUrl
                    }
                }
            }
        }
    }
`;
