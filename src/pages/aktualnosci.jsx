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
import Post from 'components/Post/Post';

export const Head = () => <HeadComponent title='aktualności' />;

const Aktualnosci = ({
  data: {
    allContentfulPost: { edges: allPosts },
    placeholderImage,
  },
}) => {
  const loadingRef = useRef(null);

  const { setSortByDate } = useSortByDate(allPosts);
  const { currentData } = usePaginate(allPosts, loadingRef);

  const fetchMorePosts = currentData.length < allPosts.length;

  return (
    <MainWrapper>
      <HeroImageContainer placeholderImage={placeholderImage} />

      <ContentWrapper>
        <Heading
          label='Co słychać w królestwie tańca orientalnego?'
          isMain
        />

        <Combobox setSortByDate={setSortByDate} />

        <Styled.PostsWrapper>
          {currentData.map(({ node: { id, ...post } }) => (
            <Post
              key={id}
              {...post}
            />
          ))}
        </Styled.PostsWrapper>

        {fetchMorePosts && <div ref={loadingRef} />}
      </ContentWrapper>
    </MainWrapper>
  );
};

export default Aktualnosci;

export const query = graphql`
  query AktualnosciQuery {
    allContentfulPost {
      edges {
        node {
          id
          title
          gallery {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            description
            url
          }
          description {
            raw
          }
          date
          createdAt
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
