import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import * as Styled from 'assets/styles/pages/aktualnosci.styles';
import { useSortByDate } from 'hooks/useSortByDate';
import { usePaginate } from 'hooks/usePaginate';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import HeroImageContainer from 'components/HeroImageContainer/HeroImageContainer';
import Heading from 'components/Heading/Heading';
import Combobox from 'components/Combobox/Combobox';
import Frame from 'components/Frame/Frame';
import Post from 'components/Post/Post';

const Aktualnosci = ({
  data: {
    allDatoCmsPost: { edges: allPosts },
    placeholderImage,
  },
}) => {
  const loadingRef = useRef(null);

  const { setSortByDate } = useSortByDate(allPosts);
  const { currentData } = usePaginate(allPosts, loadingRef);

  const fetchMorePosts = currentData.length < allPosts.length;

  return (
    <>
      <HeadComponent title='aktualności' />

      <MainWrapper>
        <HeroImageContainer placeholderImage={placeholderImage} />

        <ContentWrapper>
          <Heading
            label='Co słychać w królestwie tańca orientalnego?'
            isMain
          />

          <Combobox setSortByDate={setSortByDate} />

          <Styled.PostsWrapper>
            {currentData.length ? (
              <>
                {currentData.map(({ node: { id, ...post } }) => (
                  <Frame
                    key={id}
                    upRight
                  >
                    <Post {...post} />
                  </Frame>
                ))}
              </>
            ) : (
              <h2>Nie znaleziono postów.</h2>
            )}
          </Styled.PostsWrapper>

          {fetchMorePosts && <div ref={loadingRef} />}
        </ContentWrapper>
      </MainWrapper>
    </>
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
            alt
            video {
              mp4Url
            }
          }
          description {
            value
          }
          id
          title
          date
          meta {
            firstPublishedAt
          }
        }
      }
    }

    placeholderImage: file(relativePath: { eq: "Aktualnosci/banerAktualnosci.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
      }
    }
  }
`;
