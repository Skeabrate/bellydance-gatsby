import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { useAktualnosciQuery } from 'hooks/useAktualnosciQuery';
import { useAktualnosciSort } from 'hooks/useAktualnosciSort';
import { usePaginate } from 'hooks/usePaginate';

import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeroImageContainer from 'components/HeroImageContainer/HeroImageContainer';
import Heading from 'components/Heading/Heading';
import Combobox from 'components/Combobox/Combobox';
import Frame from 'components/Frame/Frame';
import Post from 'components/Post/Post';

import { StyledPostsContainer } from 'assets/styles/pages/aktualnosci.styles';
import ParalaxWrapper from '../templates/ParalaxWrapper';

const Aktualnosci = ({ data }) => {
  const loadingRef = useRef(null);

  const { placeholderImage } = useAktualnosciQuery();
  const { setSortDescending } = useAktualnosciSort(data);
  const { currentData } = usePaginate(data, loadingRef);

  return (
    <MainWrapper>
      <HeroImageContainer placeholderImage={placeholderImage} />

      <ParalaxWrapper>
        <ContentWrapper>
          <Heading label="Co słychać w królestwie tańca orientalnego?" isMain />

          <Combobox setSortDescending={setSortDescending} />

          <StyledPostsContainer>
            {currentData.map(
              ({ node: { id, title, description, assets, video, meta } }) => (
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

          {currentData.length < data.allDatoCmsPost.edges.length && (
            <div ref={loadingRef} />
          )}
        </ContentWrapper>
      </ParalaxWrapper>
    </MainWrapper>
  );
};

export default Aktualnosci;

export const query = graphql`
  query AktualnosciQuery {
    allDatoCmsPost {
      edges {
        node {
          assets {
            gatsbyImageData(placeholder: BLURRED)
          }
          description {
            value
          }
          id
          title
          video {
            height
            url
            width
            thumbnailUrl
          }
          meta {
            firstPublishedAt
          }
        }
      }
    }
  }
`;
