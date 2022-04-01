import { graphql, useStaticQuery } from 'gatsby';

export const useAktualnosciQuery = () => {
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

    return { placeholderImage };
};
