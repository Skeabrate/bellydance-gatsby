import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

export const useIndexQuery = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "Homepage/homepageBaner.jpeg" }
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
