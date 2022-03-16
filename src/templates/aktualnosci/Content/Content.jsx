import React from 'react';

const Content = ({ posts }) => {
    return (
        <div>
            <h1>Aktualnosci</h1>

            <h3>Posty:</h3>
            <section>
                {posts.allDatoCmsPost.edges.map(
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

export default Content;
