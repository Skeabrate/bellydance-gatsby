import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';

const Content = ({ posts }) => {
    return (
        <div>
            <Heading
                label="Co słychać w królestwie tańca orientalnego?"
                isMain
            />

            <section>
                {posts.allDatoCmsPost.edges.map(
                    ({
                        node: { id, title, date, description, assets, video },
                    }) => (
                        <article key={id} style={{ marginBottom: '50px' }}>
                            <h2>{title}</h2>
                            <p>{date}</p>

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

Content.propTypes = {
    posts: PropTypes.object.isRequired,
};

export default Content;
