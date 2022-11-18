import React, { useRef } from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
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
import NoDataFound from 'components/NoDataFound/NoDataFound';

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
        {/* <HeroImageContainer placeholderImage={placeholderImage} /> */}

        {/* BIRTHDAY */}
        <div
          style={{
            width: '100%',
            height: '120vh',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <StaticImage
            src='../assets/images/happyBirthDay.png'
            placeholder='blurred'
            alt=''
            layout='fullWidth'
          />
          <h1
            style={{
              position: 'absolute',
              top: '80%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              fontFamily: '"Great Vibes", cursiv',
              fontSize: '10rem',
              textAlign: 'center',
            }}
          >
            ❤️ <span style={{ marginRight: '4rem' }}>Wszystkiego najlepszego!</span>❤️
          </h1>
        </div>
        {/* BIRTHDAY */}

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

          {currentData.length ? (
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
          ) : (
            <NoDataFound label={'Nie znaleziono wpisów.'} />
          )}

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
