import React, { useRef } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { StructuredText } from 'react-datocms';
import * as Styled from 'assets/styles/pages/blog.styles';
import { useSortByDate } from 'hooks/useSortByDate';
import { usePaginate } from 'hooks/usePaginate';
import { getFirstPublishedAtDate } from 'utils/getFirstPublishedAtDate';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeroImageContainer from 'components/HeroImageContainer/HeroImageContainer';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import Heading from 'components/Heading/Heading';
import Combobox from 'components/Combobox/Combobox';
import PyramidDate from 'components/PyramidDate/PyramidDate';

const Blog = ({
  data: {
    allDatoCmsBlog: { edges: allBlogPosts },
    placeholderImage,
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
        <HeroImageContainer placeholderImage={placeholderImage} />

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
            {currentData.map(
              ({ node: { id, blogPostTitle, thumbnail, content, link, meta, date } }) => (
                <Styled.BlogPost key={id}>
                  <Styled.Thumbnail>
                    <GatsbyImage
                      image={thumbnail.gatsbyImageData}
                      alt={thumbnail.alt || 'Agnieszka Świeczkowska Leyla bellydance'}
                    />
                  </Styled.Thumbnail>

                  <Styled.Content>
                    <h2>{blogPostTitle}</h2>

                    <Styled.FadeOutText>
                      <StructuredText data={content[0]?.description?.value} />
                    </Styled.FadeOutText>

                    <Link to={`/blog/${link}`}>Czytaj więcej</Link>
                  </Styled.Content>

                  <PyramidDate date={date || getFirstPublishedAtDate(meta.firstPublishedAt)} />
                </Styled.BlogPost>
              )
            )}
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
            alt
          }
          content {
            description {
              value
            }
          }
          link
          date
          meta {
            firstPublishedAt
          }
        }
      }
    }

    placeholderImage: file(relativePath: { eq: "Blog/banerBlog.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: WEBP)
      }
    }
  }
`;
