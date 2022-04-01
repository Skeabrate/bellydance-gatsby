import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export const useAktualnosci = (data) => {
    const [sortDescending, setSortDescending] = useState(true);

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

    (function () {
        data?.allDatoCmsPost.edges.sort((a, b) =>
            sortDescending
                ? Date.parse(b.node.meta.firstPublishedAt) -
                  Date.parse(a.node.meta.firstPublishedAt)
                : Date.parse(a.node.meta.firstPublishedAt) -
                  Date.parse(b.node.meta.firstPublishedAt)
        );
    })();

    return { placeholderImage, setSortDescending };
};
