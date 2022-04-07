import { graphql, useStaticQuery } from 'gatsby';

export const useKontaktQuery = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "Kontakt/banerKontakt.jpeg" }
                ) {
                    childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
                    }
                }
            }
        `
    );

    return { placeholderImage };
};
