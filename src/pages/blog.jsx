import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import Heading from 'components/Heading/Heading';
import Combobox from 'components/Combobox/Combobox';
import { useSortByDate } from 'hooks/useSortByDate';
import { usePaginate } from 'hooks/usePaginate';

const Blog = ({ data }) => {
  const loadingRef = useRef(null);

  const { setSortByDate } = useSortByDate(data.allDatoCmsBlog.edges);
  const { currentData } = usePaginate(data.allDatoCmsBlog.edges, loadingRef);

  const fetchMorePosts = currentData.length < data.allDatoCmsBlog.edges.length;

  return (
    <>
      <HeadComponent title='blog' />
      <MainWrapper>
        <ContentWrapper>
          <Heading
            label='Orientalny Blog'
            isMain
          />

          <Combobox setSortByDate={setSortByDate} />

          {fetchMorePosts && <div ref={loadingRef} />}
        </ContentWrapper>
      </MainWrapper>
    </>
  );
};

export default Blog;

export const query = graphql`
  query AllBlogPostsQuery {
    allDatoCmsBlog {
      edges {
        node {
          id
          blogPostTitle
          thumbnail {
            gatsbyImageData(placeholder: BLURRED)
          }
          link
          date
          meta {
            firstPublishedAt
          }
        }
      }
    }
  }
`;
