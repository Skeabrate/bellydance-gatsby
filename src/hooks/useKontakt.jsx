import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const useKontakt = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "Kontakt/banerKontakt.jpg" }
                ) {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
                    }
                }
            }
        `
    );

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return { placeholderImage, submitHandler };
};
