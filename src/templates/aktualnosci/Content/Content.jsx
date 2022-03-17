import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import SkipButton from 'components/SkipButton/SkipButton';

const Content = ({ posts }) => {
    posts.allDatoCmsPost.edges.sort(
        (a, b) =>
            Date.parse(b.node.meta.firstPublishedAt) -
            Date.parse(a.node.meta.firstPublishedAt)
    );

    return (
        <ContentWrapper>
            <Heading
                label="Co słychać w królestwie tańca orientalnego?"
                isMain
            />

            <SkipButton label="Program pokazów" />

            <section style={{ marginTop: '100px' }}>
                {posts.allDatoCmsPost.edges.map(
                    ({
                        node: { id, title, description, assets, video, meta },
                    }) => (
                        <article key={id} style={{ marginBottom: '50px' }}>
                            <h2>{title}</h2>
                            <p>{meta.firstPublishedAt.slice(0, 10)}</p>

                            {description.value.document.children.map(
                                ({ children }) => (
                                    <p>{children[0].value}</p>
                                )
                            )}
                        </article>
                    )
                )}
            </section>
        </ContentWrapper>
    );
};

Content.propTypes = {
    posts: PropTypes.object.isRequired,
};

export default Content;
