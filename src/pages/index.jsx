import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { StyledBgImage } from './index.styles';

const IndexPage = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "Homepage/homepageBaner.jpg" }
                ) {
                    childImageSharp {
                        gatsbyImageData(
                            width: 2000
                            placeholder: BLURRED
                            formats: WEBP
                        )
                    }
                }
            }
        `
    );
    const pluginImage = getImage(placeholderImage);

    return (
        <main style={{ height: '150vh' }}>
            <StyledBgImage image={pluginImage} />
        </main>
    );
};

export default IndexPage;
