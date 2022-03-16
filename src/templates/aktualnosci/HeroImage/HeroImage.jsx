import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { StyledBgImage } from './HeroImage.styles';

const HeroImage = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "Aktualnosci/banerAktualnosci.jpg" }
                ) {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
                    }
                }
            }
        `
    );

    const pluginImage = getImage(placeholderImage);

    return <StyledBgImage image={pluginImage} />;
};

export default HeroImage;
