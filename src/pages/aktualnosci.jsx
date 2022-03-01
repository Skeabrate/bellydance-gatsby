import React from 'react';
import { graphql } from 'gatsby';

const aktualnosci = ({ data }) => {
    return (
        <div>
            <h1>Aktualnosci</h1>

            <h3>Posty:</h3>
            <section>
                {data.allDatoCmsPost.edges.map(
                    ({
                        node: { id, title, date, description, assets, video },
                    }) => (
                        <article key={id}>
                            <p>{date}</p>
                            <h1>{title}</h1>
                        </article>
                    )
                )}
            </section>
        </div>
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
