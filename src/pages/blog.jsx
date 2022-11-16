import React, { useRef } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as Styled from 'assets/styles/pages/blog.styles';
import { useSortByDate } from 'hooks/useSortByDate';
import { usePaginate } from 'hooks/usePaginate';
import { getFirstPublishedAtDate } from 'utils/getFirstPublishedAtDate';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import Heading from 'components/Heading/Heading';
import Combobox from 'components/Combobox/Combobox';
import PyramidDate from 'components/PyramidDate/PyramidDate';

const Blog = ({
  data: {
    allDatoCmsBlog: { edges: allBlogPosts },
  },
}) => {
  const loadingRef = useRef(null);

  const { setSortByDate } = useSortByDate(allBlogPosts);
  const { currentData } = usePaginate(allBlogPosts, loadingRef, 12);

  const fetchMorePosts = currentData.length < allBlogPosts.length;

  return (
    <>
      <HeadComponent title='blog' />
      <MainWrapper>
        <ContentWrapper>
          <Heading
            label='Orientalny Blog'
            isMain
          />

          <Styled.Intro>
            Zapraszam na mój orientalny blog, na którym dzielę się swoją wiedzą na temat tańca
            orientalnego i nie tylko.
          </Styled.Intro>

          <Combobox setSortByDate={setSortByDate} />

          <Styled.BlogPostsWrapper>
            {currentData.map(({ node: { id, blogPostTitle, thumbnail, link, meta, date } }) => (
              <Styled.BlogPost key={id}>
                <Link to={`/blog/${link}`}>
                  <Styled.Thumbnail>
                    <GatsbyImage
                      image={thumbnail.gatsbyImageData}
                      alt={'Agnieszka Świeczkowska Leyla bellydance'}
                    />
                  </Styled.Thumbnail>

                  <div>
                    <h2>{blogPostTitle}</h2>

                    <PyramidDate date={date || getFirstPublishedAtDate(meta.firstPublishedAt)} />
                  </div>
                </Link>
              </Styled.BlogPost>
            ))}
          </Styled.BlogPostsWrapper>

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
