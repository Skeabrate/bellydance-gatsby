import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/Heading/Heading';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper';
import Combobox from 'components/Combobox/Combobox';
import Frame from 'components/Frame/Frame';
import Post from './Post/Post';

import { StyledPostsContainer } from './Content.styles';

const Content = ({ posts }) => {
    const [sortDescending, setSortDescending] = useState(true);

    (function () {
        posts.allDatoCmsPost.edges.sort((a, b) =>
            sortDescending
                ? Date.parse(b.node.meta.firstPublishedAt) -
                  Date.parse(a.node.meta.firstPublishedAt)
                : Date.parse(a.node.meta.firstPublishedAt) -
                  Date.parse(b.node.meta.firstPublishedAt)
        );
    })();

    return (
        <ContentWrapper>
            <Heading
                label="Co słychać w królestwie tańca orientalnego?"
                isMain
            />

            <Combobox setSortDescending={setSortDescending} />

            <StyledPostsContainer>
                {posts.allDatoCmsPost.edges.map(
                    ({
                        node: { id, title, description, assets, video, meta },
                    }) => (
                        <Frame key={id} upRight>
                            <Post
                                title={title}
                                description={description}
                                assets={assets}
                                video={video}
                                meta={meta}
                            />
                        </Frame>
                    )
                )}
            </StyledPostsContainer>
        </ContentWrapper>
    );
};

Content.propTypes = {
    posts: PropTypes.object.isRequired,
};

export default Content;
