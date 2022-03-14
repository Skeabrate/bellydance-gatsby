import React from 'react';
import { graphql } from 'gatsby';

const aktualnosci = ({ data }) => {
    return (
        <div style={{ margin: '140px 60px' }}>
            <h1>Aktualnosci</h1>

            <h3>Posty:</h3>
            <section>
                {data.allDatoCmsPost.edges.map(
                    ({
                        node: { id, title, date, description, assets, video },
                    }) => (
                        <article key={id} style={{ marginBottom: '50px' }}>
                            <p>{date}</p>
                            <h2>{title}</h2>

                            {description.value.document.children.map(
                                ({ children }) => (
                                    <p>{children[0].value}</p>
                                )
                            )}
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
