import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import HeroImageContainer from 'components/HeroImageContainer/HeroImageContainer';

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

    return <HeroImageContainer placeholderImage={placeholderImage} />;
};

export default HeroImage;
