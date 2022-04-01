import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

export const useIndex = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "Homepage/homepageBaner.jpg" }
                ) {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
                    }
                }
            }
        `
    );

    const pluginImage = getImage(placeholderImage);

    return { pluginImage };
};
