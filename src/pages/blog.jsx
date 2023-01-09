import React, { useRef } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as Styled from 'assets/styles/pages/blog.styles';
import { useSortByDate } from 'hooks/useSortByDate';
import { usePaginate } from 'hooks/usePaginate';
import { getDate } from 'utils/getDate';
import MainWrapper from 'templates/MainWrapper';
import ContentWrapper from 'templates/ContentWrapper';
import HeroImageContainer from 'components/HeroImageContainer/HeroImageContainer';
import HeadComponent from 'components/HeadComponent/HeadComponent';
import Heading from 'components/Heading/Heading';
import Combobox from 'components/Combobox/Combobox';
import PyramidDate from 'components/PyramidDate/PyramidDate';
import PostOrnament from 'components/PostOrnament/PostOrnament';

const BlogPost = ({ blogPost: { title, thumbnail, content, link, createdAt, date } }) => {
  const firstParagraph = JSON.parse(content.raw)?.content.find(
    ({ nodeType }) => nodeType === 'paragraph'
  ).content[0].value;

  return (
    <PostOrnament>
      <Styled.BlogPost>
        <Styled.Thumbnail>
          <GatsbyImage
            image={thumbnail.gatsbyImageData}
            alt={thumbnail.description || 'Agnieszka Świeczkowska Leyla bellydance'}
          />
        </Styled.Thumbnail>
        <Styled.Content>
          <h2>{title}</h2>

          <Styled.FadeOutText>{firstParagraph}</Styled.FadeOutText>

          <Link to={`/blog/${link}`}>Czytaj więcej</Link>
        </Styled.Content>
        <PyramidDate date={getDate(date, createdAt)} />
      </Styled.BlogPost>
    </PostOrnament>
  );
};

const Blog = ({
  data: {
    allContentfulBlog: { edges: allBlogPosts },
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
            {currentData.map(({ node: { id, ...blogPost } }) => (
              <BlogPost
                key={id}
                blogPost={blogPost}
              />
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
    allContentfulBlog {
      edges {
        node {
          id
          title
          thumbnail {
            gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            description
          }
          content {
            raw
          }
          date
          createdAt
          link
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
